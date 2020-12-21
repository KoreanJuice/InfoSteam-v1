import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as config from '../../../config.json';
import { AbstractSteamNewsService } from '../abstract-services/abstract-steam-news-service';
import { GetNewsForApp } from '../interfaces/steam-news/get-news-for-app';

@Injectable({
  providedIn: 'root'
})
export class SteamNewsService extends AbstractSteamNewsService {

  private readonly INTERFACE = 'ISteamNews';

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  getNewsForApp(appid: number, maxlength?: number, enddate?: number, count?: number, feeds?: string): Observable<GetNewsForApp> {
    let urlParams = '';
    if (maxlength) { urlParams += `&maxlength=${maxlength}`; }
    if (enddate) { urlParams += `&enddate=${enddate}`; }
    if (count) { urlParams += `&count=${count}`; }
    if (feeds) { urlParams += `&feeds=${feeds}`; }

    return this.http
      .get<GetNewsForApp>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetNewsForApp/v2/?appid=${appid}${urlParams}`);
  }

}
