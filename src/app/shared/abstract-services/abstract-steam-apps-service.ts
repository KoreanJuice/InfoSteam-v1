import { Observable } from 'rxjs';

import { GetAppList } from '../interfaces/steam-apps/get-app-list';
import { GetServersAtAddress } from '../interfaces/steam-apps/get-servers-at-address';
import { UpToDateCheck } from '../interfaces/steam-apps/up-to-date-check';

export abstract class AbstractSteamAppsService {

  abstract getAppList(): Observable<GetAppList>;

  abstract getServersAtAddress(addr: string): Observable<GetServersAtAddress>;

  abstract upToDateCheck(appid: number, version: number): Observable<UpToDateCheck>;

}
