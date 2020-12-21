import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { key } from '../../../key';
import * as config from '../../../config.json';
import { AbstractSteamUserService } from '../abstract-services/abstract-steam-user-service';
import { GetFriendList } from '../interfaces/steam-user/get-friend-list';
import { GetPlayerBans } from '../interfaces/steam-user/get-player-bans';
import { GetPlayerSummaries } from '../interfaces/steam-user/get-player-summaries';
import { GetUserGroupList } from '../interfaces/steam-user/get-user-group-list';
import { ResolveVanityUrl } from '../interfaces/steam-user/resolve-vanity-url';

@Injectable({
  providedIn: 'root'
})
export class SteamUserService extends AbstractSteamUserService {

  private readonly INTERFACE = 'ISteamUser';

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  getFriendList(steamid: number, relationship?: string): Observable<GetFriendList> {
    let urlParams = '';
    if (relationship) { urlParams += `&relationship=${relationship}`; }

    return this.http
      .get<GetFriendList>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetFriendList/v1/?key=${key}&steamid=${steamid}${urlParams}`);
  }

  getPlayerBans(steamids: string): Observable<GetPlayerBans> {
    return this.http
      .get<GetPlayerBans>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetPlayerBans/v1/?key=${key}&steamids=${steamids}`);
  }

  getPlayerSummaries(steamids: string): Observable<GetPlayerSummaries> {
    return this.http
      .get<GetPlayerSummaries>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetPlayerSummaries/v2/?key=${key}&steamids=${steamids}`);
  }

  getUserGroupList(steamid: number): Observable<GetUserGroupList> {
    return this.http
      .get<GetUserGroupList>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetUserGroupList/v1/?key=${key}&steamid=${steamid}`);
  }

  resolveVanityURL(vanityUrl: string, urlType?: number): Observable<ResolveVanityUrl> {
    let urlParams = '';
    if (urlType) { urlParams += `&url_type=${urlType}`; }

    return this.http
      .get<ResolveVanityUrl>(`${config.STEAM_API_URL}/${this.INTERFACE}/ResolveVanityURL/v1/?key=${key}&vanityurl=${vanityUrl}${urlParams}`);
  }

}
