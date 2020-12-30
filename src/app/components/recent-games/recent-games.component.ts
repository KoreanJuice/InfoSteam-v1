import { Component, Input, OnChanges } from '@angular/core';

import { SteamAppsService } from '../../shared/services/steam-apps.service';
import { SteamUserStatsService } from '../../shared/services/steam-user-stats.service';
import { PlayerService } from '../../shared/services/player.service';
import { getGameData } from '../../shared/helpers/getGameData';

@Component({
  selector: 'app-recent-games',
  templateUrl: './recent-games.component.html',
  styleUrls: ['./recent-games.component.scss']
})
export class RecentGamesComponent implements OnChanges {

  @Input() steamid: number;
  @Input() nGames: number;

  public gamesData: any[];

  constructor(
    private steamUserStats: SteamUserStatsService,
    private steamApps: SteamAppsService,
    private player: PlayerService,
  ) { }

  ngOnChanges(): void {
    this.mixData();
  }
  // TODO: AH
  private async mixData(): Promise<any> {
    // let gameData: any;

    // this.gamesData = [];

    // let owo;
    // owo = await getGameData(524220, this.steamUserStats, this.steamApps);
    // console.log('recommended games: owo', owo);

    // const { response: { games } } = await this.player.getRecentlyPlayedGames(this.steamid, this.nGames);

    // games.forEach(async response => {
    //   const { appid, gameName, gameImage, player_count, game } = await getGameData(response.appid, this.steamUserStats, this.steamApps);
    //   this.gamesData.push(response);
    //   this.gamesData.push(gameData);
    //   console.log('promise gameData:', game, appid, gameName, gameImage, player_count);
    // });

    // console.log('recent games: gamesData', this.gamesData);
  }

}
