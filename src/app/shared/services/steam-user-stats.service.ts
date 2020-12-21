import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  /**
   * Retrieves the global achievement percentages for the specified app.
   * @param gameid GameID to retrieve the achievement percentages for
   */
  getGlobalAchievementPercentagesForApp(gameid: number): Promise<GetGlobalAchievementPercentagesForApp> {
    return this.http
      .get<GetGlobalAchievementPercentagesForApp>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetGlobalAchievementPercentagesForApp/v2/?gameid=${gameid}`)
      .toPromise();
  }
  /**
   * Retrieves the global stats percentages for the specified app.
   * @param appid AppID that we're getting global stats for
   * @param count Number of stats get data for
   * @param statName Names of stat to get data for
   * @param startdate Start date for daily totals (unix epoch timestamp)
   * @param enddate End date for daily totals (unix epoch timestamp)
   */
  getGlobalStatsForGame(appid: number, count: number, statName: string, startdate?: number, enddate?: number): Promise<GetGlobalStatsForGame> {
    let urlParams = '';
    if (startdate) { urlParams += `&startdate=${startdate}`; }
    if (enddate) { urlParams += `&enddate=${enddate}`; }

    return this.http
      .get<GetGlobalStatsForGame>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetGlobalStatsForGame/v1/?appid=${appid}&count=${count}&name[0]=${statName}${urlParams}`)
      .toPromise();
  }
  /**
   * Gets the total number of players currently active in the specified app on Steam.
   * @param appid AppID that we're getting user count for
   */
  getNumberOfCurrentPlayers(appid: number): Promise<GetNumberOfCurrentPlayers> {
    return this.http
      .get<GetNumberOfCurrentPlayers>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetNumberOfCurrentPlayers/v1/?appid=${appid}`)
      .toPromise();
  }
  /**
   * Gets the list of achievements the specified user has unlocked in an app.
   * @param steamid SteamID of user
   * @param appid AppID to get achievements for
   * @param lang Language to return strings for
   */
  getPlayerAchievements(steamid: number, appid: number, lang?: string): Promise<GetPlayerAchievements> {
    let urlParams = '';
    if (lang) { urlParams += `&l=${lang}`; }

    return this.http
      .get<GetPlayerAchievements>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetPlayerAchievements/v1/?key=${key}&steamid=${steamid}&appid=${appid}${urlParams}`)
      .toPromise();
  }
  /**
   * Gets the complete list of stats and achievements for the specified game.
   * @param appid appid of game
   * @param lang localized language to return (english, french, etc.)
   */
  getSchemaForGame(appid: number, lang?: string): Promise<GetSchemaForGame> {
    let urlParams = '';
    if (lang) { urlParams += `&l=${lang}`; }

    return this.http
      .get<GetSchemaForGame>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetSchemaForGame/v2/?key=${key}&appid=${appid}${urlParams}`)
      .toPromise();
  }
  /**
   * Gets the list of stats that the specified user has set in an app.
   * @param steamid SteamID of user
   * @param appid appid of game
   */
  getUserStatsForGame(steamid: number, appid: number): Promise<GetUserStatsForGame> {
    return this.http
      .get<GetUserStatsForGame>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetUserStatsForGame/v2/?key=${key}&steamid=${steamid}&appid=${appid}`)
      .toPromise();
  }

}
