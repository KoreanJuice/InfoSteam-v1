import { Component, Input, OnInit } from '@angular/core';

import { SteamAppsService } from '../../shared/services/steam-apps.service';
import { SteamUserStatsService } from '../../shared/services/steam-user-stats.service';
import { getGameData } from '../../shared/helpers/getGameData';

@Component({
  selector: 'app-recommended-games',
  templateUrl: './recommended-games.component.html',
  styleUrls: ['./recommended-games.component.scss']
})
export class RecommendedGamesComponent implements OnInit {

  public gameData: any;

  constructor(
    private steamUserStats: SteamUserStatsService,
    private steamApps: SteamAppsService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.gameData = await getGameData(524220, this.steamUserStats, this.steamApps);
    console.log('recommended games: gameData', this.gameData);
  }

}
