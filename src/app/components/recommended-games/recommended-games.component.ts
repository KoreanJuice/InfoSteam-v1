import { Component, OnInit } from '@angular/core';

import { SteamAppsService } from '../../shared/services/steam-apps.service';
import { SteamUserStatsService } from '../../shared/services/steam-user-stats.service';
import { getGameData } from '../../shared/helpers/get-game-data';
import { GameData } from '../../shared/interfaces/data/game-data';

@Component({
  selector: 'app-recommended-games',
  templateUrl: './recommended-games.component.html',
  styleUrls: ['./recommended-games.component.scss']
})
export class RecommendedGamesComponent implements OnInit {

  private recommendedGames: number[] = [524220, 237930, 312750, 987720];
  public games: GameData[] = [];

  constructor(
    private steamUserStats: SteamUserStatsService,
    private steamApps: SteamAppsService,
  ) { }

  ngOnInit(): void {
    this.getGamesData();
  }

  private async getGamesData(): Promise<void> {
    for (const game of this.recommendedGames) {
      const gameData = await getGameData(game, this.steamUserStats, this.steamApps);
      this.games.push(gameData);
    }
  }

}
