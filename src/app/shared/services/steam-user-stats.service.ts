import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { key } from '../../../key';
import * as config from '../../../config.json';
import { AbstractSteamUserStatsService } from '../abstract-services/abstract-steam-user-stats-service';
import { GetGlobalAchievementPercentagesForApp } from '../interfaces/steam-user-stats/get-global-achievement-percentages-for-app';
import { GetGlobalStatsForGame } from '../interfaces/steam-user-stats/get-global-stats-for-game';
import { GetNumberOfCurrentPlayers } from '../interfaces/steam-user-stats/get-number-of-current-players';
import { GetPlayerAchievements } from '../interfaces/steam-user-stats/get-player-achievements';
import { GetSchemaForGame } from '../interfaces/steam-user-stats/get-schema-for-game';
import { GetUserStatsForGame } from '../interfaces/steam-user-stats/get-user-stats-for-game';

@Injectable({
  providedIn: 'root'
})
export class SteamUserStatsService extends AbstractSteamUserStatsService {

  private readonly INTERFACE = 'ISteamUserStats';

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  getGlobalAchievementPercentagesForApp(gameid: number): Observable<GetGlobalAchievementPercentagesForApp> {
    return this.http
      .get<GetGlobalAchievementPercentagesForApp>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetGlobalAchievementPercentagesForApp/v2/?gameid=${gameid}`);
  }

  getGlobalStatsForGame(appid: number, count: number, statName: string, startdate?: number, enddate?: number): Observable<GetGlobalStatsForGame> {
    let urlParams = '';
    if (startdate) { urlParams += `&startdate=${startdate}`; }
    if (enddate) { urlParams += `&enddate=${enddate}`; }

    return this.http
      .get<GetGlobalStatsForGame>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetGlobalStatsForGame/v1/?appid=${appid}&count=${count}&name[0]=${statName}${urlParams}`);
  }

  getNumberOfCurrentPlayers(appid: number): Observable<GetNumberOfCurrentPlayers> {
    return this.http
      .get<GetNumberOfCurrentPlayers>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetNumberOfCurrentPlayers/v1/?appid=${appid}`)
  }

  getPlayerAchievements(steamid: number, appid: number, lang?: string): Observable<GetPlayerAchievements> {
    let urlParams = '';
    if (lang) { urlParams += `&l=${lang}`; }

    return this.http
      .get<GetPlayerAchievements>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetPlayerAchievements/v1/?key=${key}&steamid=${steamid}&appid=${appid}${urlParams}`);
  }

  getSchemaForGame(appid: number, lang?: string): Observable<GetSchemaForGame> {
    let urlParams = '';
    if (lang) { urlParams += `&l=${lang}`; }

    return this.http
      .get<GetSchemaForGame>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetSchemaForGame/v2/?key=${key}&appid=${appid}${urlParams}`);
  }

  getUserStatsForGame(steamid: number, appid: number): Observable<GetUserStatsForGame> {
    return this.http
      .get<GetUserStatsForGame>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetUserStatsForGame/v2/?key=${key}&steamid=${steamid}&appid=${appid}`);
  }

}
