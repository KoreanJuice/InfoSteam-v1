import { SteamAppsService } from '../services/steam-apps.service';
import { SteamUserStatsService } from '../services/steam-user-stats.service';
import { headerImgUrl } from './headerImgUrl';

export async function getGameData(appid: number, steamUserStats: SteamUserStatsService, steamApps: SteamAppsService): Promise<any> {
  try {
    const { applist: { apps } } = await steamApps.getAppList().toPromise();

    const { name } = apps.find((app) => app.appid === appid);

    const { game } = await steamUserStats.getSchemaForGame(appid).toPromise();

    const { response: { player_count } } = await steamUserStats.getNumberOfCurrentPlayers(appid).toPromise();

    const gameImage = await headerImgUrl(appid);

    return {
      ...game,
      appid,
      gameName: name,
      gameImage,
      player_count
    };

  } catch (error) {
    console.error('Error while retrieving game data', error);
  }

}
