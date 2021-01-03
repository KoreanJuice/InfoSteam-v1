import { SteamAppsService } from '../services/steam-apps.service';
import { SteamUserStatsService } from '../services/steam-user-stats.service';
import { GameData } from '../interfaces/data/game-data';
import { headerImgUrl } from './header-img-url';

export async function getGameData(appid: number, steamUserStats: SteamUserStatsService, steamApps: SteamAppsService): Promise<GameData> {
  const { applist: { apps } } = await steamApps.getAppList();

  const { name } = apps.find((app) => app.appid === appid);

  const { game } = await steamUserStats.getSchemaForGame(appid);

  const { response: { player_count } } = await steamUserStats.getNumberOfCurrentPlayers(appid);

  const gameImage = await headerImgUrl(appid);

  return {
    game,
    appid,
    gameName: name,
    gameImage,
    player_count,
  };

}
