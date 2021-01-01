import { Component, Input, OnChanges } from '@angular/core';

import { SteamAppsService } from '../../shared/services/steam-apps.service';
import { SteamUserStatsService } from '../../shared/services/steam-user-stats.service';
import { PlayerService } from '../../shared/services/player.service';
import { RecentlyPlayedGames } from '../../shared/interfaces/data/recently-played-games';
import { getGameData } from '../../shared/helpers/get-game-data';

@Component({
  selector: 'app-recent-games',
  templateUrl: './recent-games.component.html',
  styleUrls: ['./recent-games.component.scss']
})
export class RecentGamesComponent implements OnChanges {

  @Input() steamid: string;
  @Input() nGames: number;

  public games: RecentlyPlayedGames[];

  constructor(
    private steamUserStats: SteamUserStatsService,
    private steamApps: SteamAppsService,
    private player: PlayerService,
  ) { }

  ngOnChanges(): void {
    this.getRecentlyPlayedGames(this.steamid, this.nGames);
  }

  private async getRecentlyPlayedGames(steamid: string, nGames: number): Promise<void> {
    const { response: { games } } = await this.player.getRecentlyPlayedGames(steamid, nGames);

    const recentGames: RecentlyPlayedGames[] = [];

    for (const game of games) {
      const gameData = await getGameData(game.appid, this.steamUserStats, this.steamApps);

      recentGames.push({
        recentData: game,
        data: gameData,
      });
    }

    this.games = recentGames;
  }

}
