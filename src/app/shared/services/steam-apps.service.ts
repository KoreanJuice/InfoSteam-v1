import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as config from '../../../config.json';
import { AbstractSteamAppsService } from '../abstract-services/abstract-steam-apps-service';
import { GetAppList } from '../interfaces/steam-apps/get-app-list';
import { GetServersAtAddress } from '../interfaces/steam-apps/get-servers-at-address';
import { UpToDateCheck } from '../interfaces/steam-apps/up-to-date-check';

@Injectable({
  providedIn: 'root'
})
export class SteamAppsService extends AbstractSteamAppsService {

  private readonly INTERFACE = 'ISteamApps';

  private appList: Promise<GetAppList> = null;

  constructor(
    private http: HttpClient
  ) {
    super();
  }
  /**
   * Gets the complete list of public apps.
   * @return IGetAppList => applist: { apps: [{ appid: number, name: string }] }
   */
  getAppList(): Promise<GetAppList> {
    if (this.appList) {
      return this.appList;
    } else {
      this.appList = this.http
        .get<GetAppList>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetAppList/v2/`)
        .toPromise();
      return this.appList;
    }

  }
  /**
   * @param addr IP or IP:queryport to list
   */
  getServersAtAddress(addr: string): Promise<GetServersAtAddress> {
    return this.http
      .get<GetServersAtAddress>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetServersAtAddress/v1/?addr=${addr}`)
      .toPromise();
  }
  /**
   * @param appid AppID of game
   * @param version The installed version of the game
   */
  upToDateCheck(appid: number, version: number): Promise<UpToDateCheck> {
    return this.http
      .get<UpToDateCheck>(`${config.STEAM_API_URL}/${this.INTERFACE}/UpToDateCheck/v1/?appid=${appid}&version=${version}`)
      .toPromise();
  }

}
