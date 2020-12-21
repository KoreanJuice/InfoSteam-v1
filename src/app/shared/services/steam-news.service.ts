import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  /**
   * Get the news for the specified app.
   * @param appid AppID to retrieve news for
   * @param maxlength Max length for the content to return, if this is 0 the full content is returned, if it's less then a blurb is generated to fit.
   * @param count number of posts to retrieve (default 20)
   * @param enddate Retrieve posts earlier than this date (unix epoch timestamp)
   * @param feeds Comma-seperated list of feed names to return news for
   */
  getNewsForApp(appid: number, maxlength: number = 0, count: number = 5, enddate?: number, feeds?: string): Promise<GetNewsForApp> {
    let urlParams = '';
    if (maxlength) { urlParams += `&maxlength=${maxlength}`; }
    if (count) { urlParams += `&count=${count}`; }
    if (enddate) { urlParams += `&enddate=${enddate}`; }
    if (feeds) { urlParams += `&feeds=${feeds}`; }

    return this.http
      .get<GetNewsForApp>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetNewsForApp/v2/?appid=${appid}${urlParams}`)
      .toPromise();
  }

}
