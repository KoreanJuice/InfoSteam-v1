import { Component, OnInit } from '@angular/core';

import { SteamAppsService } from '../../shared/services/steam-apps.service';
import { SteamUserStatsService } from '../../shared/services/steam-user-stats.service';
import { headerImgUrl } from '../../shared/helpers/headerImgUrl';

@Component({
  selector: 'app-recommended-games',
  templateUrl: './recommended-games.component.html',
  styleUrls: ['./recommended-games.component.scss']
})
export class RecommendedGamesComponent implements OnInit {

  gameData: any;
  recommendedGames = [524220, 237930, 312750, 987720];

  constructor(
    public steamUserStats: SteamUserStatsService,
    public steamApps: SteamAppsService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.gameData = await this.getGameData(524220);
    console.log('gameData', this.gameData);
  }

  public async getGameData(appid: number): Promise<any> {
    try {
      const response = await this.steamApps.getAppList().toPromise();

      const { applist: { apps } } = response;

      const { name } = apps.find((a) => a.appid === appid);

      const { game } = await this.steamUserStats.getSchemaForGame(appid).toPromise();

      const gameImage = await headerImgUrl(appid);
      const appId = appid;

      return {
        ...game,
        gameName: name,
        gameImage,
        appId
      };
    } catch (error) {
      console.error('error while retrieving game data', error);
    }
  }
  // TODO: http interceptor(?)
  // isValidImage(): boolean {
  // }

  onClickEmpty(): void {

  }

}
