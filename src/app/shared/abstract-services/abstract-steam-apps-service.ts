import { GetAppList } from '../interfaces/steam-apps/get-app-list';
import { GetServersAtAddress } from '../interfaces/steam-apps/get-servers-at-address';
import { UpToDateCheck } from '../interfaces/steam-apps/up-to-date-check';

export abstract class AbstractSteamAppsService {

  abstract getAppList(): Promise<GetAppList>;

  abstract getServersAtAddress(addr: string): Promise<GetServersAtAddress>;

  abstract upToDateCheck(appid: number, version: number): Promise<UpToDateCheck>;

}
