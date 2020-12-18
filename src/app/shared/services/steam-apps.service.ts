import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as config from '../../../config.json';
import { GetAppList } from '../interfaces/steam-apps/get-app-list';

@Injectable({
  providedIn: 'root'
})
export class SteamAppsService {

  private readonly interface = 'ISteamApps';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAppList(): Observable<GetAppList> {
    return this.httpClient.get<GetAppList>(`${config.STEAM_API_URL}/${this.interface}/GetAppList/v2/`);
  }
}
