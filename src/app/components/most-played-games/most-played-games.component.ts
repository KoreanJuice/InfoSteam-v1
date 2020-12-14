import { Component, OnInit } from '@angular/core';
import { headerImgUrl } from '../../../config';

import { SteamUserStatsService } from '../../shared/services/steam-user-stats.service';
@Component({
  selector: 'app-most-played-games',
  templateUrl: './most-played-games.component.html',
  styleUrls: ['./most-played-games.component.scss']
})
export class MostPlayedGamesComponent implements OnInit {

  gameImg: string;
  gameName: string;
  gameVersion: string;

  constructor(
    private steamUserStats: SteamUserStatsService,
  ) { }

  ngOnInit(): void {
    const appid = '524220';
    this.steamUserStats.getSchemaForGame(appid)
      .subscribe(respose => {
        this.gameImg = headerImgUrl(appid);
        this.gameName = respose.game.gameName;
        this.gameVersion = respose.game.gameVersion;
      });
  }

  onClick(): void {
    const appid = '524220';
    this.steamUserStats.getSchemaForGame(appid)
      .subscribe(respose => {
        this.gameImg = headerImgUrl(appid);
        this.gameName = respose.game.gameName;
        this.gameVersion = respose.game.gameVersion;
      });
  }

}
