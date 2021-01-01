import { GetGlobalAchievementPercentagesForApp } from '../interfaces/steam-user-stats/get-global-achievement-percentages-for-app';
import { GetGlobalStatsForGame } from '../interfaces/steam-user-stats/get-global-stats-for-game';
import { GetNumberOfCurrentPlayers } from '../interfaces/steam-user-stats/get-number-of-current-players';
import { GetPlayerAchievements } from '../interfaces/steam-user-stats/get-player-achievements';
import { GetSchemaForGame } from '../interfaces/steam-user-stats/get-schema-for-game';
import { GetUserStatsForGame } from '../interfaces/steam-user-stats/get-user-stats-for-game';

export abstract class AbstractSteamUserStatsService {

  abstract getGlobalAchievementPercentagesForApp(gameid: number): Promise<GetGlobalAchievementPercentagesForApp>;

  abstract getGlobalStatsForGame(appid: number, count: number, statName: string, startdate?: number, enddate?: number): Promise<GetGlobalStatsForGame>;

  abstract getNumberOfCurrentPlayers(appid: number): Promise<GetNumberOfCurrentPlayers>;

  abstract getPlayerAchievements(steamid: string, appid: number, lang?: string): Promise<GetPlayerAchievements>;

  abstract getSchemaForGame(appid: number, lang?: string): Promise<GetSchemaForGame>;

  abstract getUserStatsForGame(steamid: string, appid: number): Promise<GetUserStatsForGame>;

}
