import { Component, OnInit } from '@angular/core';

import { SteamAppsService } from '../../shared/services/steam-apps.service';
import { SteamUserStatsService } from '../../shared/services/steam-user-stats.service';
import { getGameData } from '../../shared/helpers/getGameData';

@Component({
  selector: 'app-recommended-games',
  templateUrl: './recommended-games.component.html',
  styleUrls: ['./recommended-games.component.scss']
})
export class RecommendedGamesComponent implements OnInit {
  // TODO: 
  private recommendedGames: number[] = [524220, 237930, 312750, 987720];
  public gameData: any;

  constructor(
    private steamUserStats: SteamUserStatsService,
    private steamApps: SteamAppsService,
  ) { }

  ngOnInit(): void {
    this.getGameData();
  }

  private async getGameData(): Promise<void> {
    this.gameData = await getGameData(524220, this.steamUserStats, this.steamApps);
    console.log('recommended games: gameData', this.gameData);
    console.log('recommended games: array - ', this.recommendedGames);
  }

}
