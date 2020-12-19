import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { key } from '../../../key';
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

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  getAppList(): Observable<GetAppList> {
    return this.http
      .get<GetAppList>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetAppList/v2/`);
  }

  getServersAtAddress(addr: string): Observable<GetServersAtAddress> {
    return this.http
      .get<GetServersAtAddress>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetServersAtAddress/v1/?addr=${addr}`);
  }

  upToDateCheck(appid: number, version: number): Observable<UpToDateCheck> {
    return this.http
      .get<UpToDateCheck>(`${config.STEAM_API_URL}/${this.INTERFACE}/UpToDateCheck/v1/?appid=${appid}&version=${version}`);
  }

}
