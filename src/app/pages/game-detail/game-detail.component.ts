import { Component, OnInit } from '@angular/core';

import { GameData } from '../../shared/interfaces/data/game-data';
import { SteamAppsService } from '../../shared/services/steam-apps.service';
import { SteamUserStatsService } from '../../shared/services/steam-user-stats.service';
import { getGameData } from '../../shared/helpers/getGameData';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  public gameData: GameData;

  constructor(
    private steamUserStats: SteamUserStatsService,
    private steamApps: SteamAppsService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.gameData = await getGameData(524220, this.steamUserStats, this.steamApps);
    console.log('user detail: gameData', this.gameData);
  }

}
