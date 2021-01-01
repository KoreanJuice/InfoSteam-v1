import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SteamAppsService } from '../../shared/services/steam-apps.service';
import { SteamUserStatsService } from '../../shared/services/steam-user-stats.service';
import { GameData } from '../../shared/interfaces/data/game-data';
import { getGameData } from '../../shared/helpers/get-game-data';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  public gameData: GameData;
  public nNews: number;
  public appid: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private steamUserStats: SteamUserStatsService,
    private steamApps: SteamAppsService,
  ) { }

  ngOnInit(): void {
    this.nNews = 1;
    this.route.params
      .subscribe(params => {
        this.appid = parseInt(params.appid, 10);
        this.getGameData(this.appid);
      });
  }

  private async getGameData(appid: number): Promise<void> {
    try {
      this.gameData = await getGameData(appid, this.steamUserStats, this.steamApps);
    } catch (error) {
      console.error('Error while retrieving game data', error);
      this.router.navigate(['Page_Not_Found']);
    }
  }

}
