import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  /**
   * Return a list of friends of a specific user
   * @param steamid SteamID of user
   * @param relationship relationship type (ex: friend)
   */
  getFriendList(steamid: number, relationship?: string): Promise<GetFriendList> {
    let urlParams = '';
    if (relationship) { urlParams += `&relationship=${relationship}`; }

    return this.http
      .get<GetFriendList>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetFriendList/v1/?key=${key}&steamid=${steamid}${urlParams}`)
      .toPromise();
  }
  /**
   * @param steamids Comma-delimited list of SteamIDs
   */
  getPlayerBans(steamids: string): Promise<GetPlayerBans> {
    return this.http
      .get<GetPlayerBans>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetPlayerBans/v1/?key=${key}&steamids=${steamids}`)
      .toPromise();
  }
  /**
   * Return a list with the major data of the users
   * @param steamids Comma-delimited list of SteamIDs (max: 100)
   */
  getPlayerSummaries(steamids: string): Promise<GetPlayerSummaries> {
    return this.http
      .get<GetPlayerSummaries>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetPlayerSummaries/v2/?key=${key}&steamids=${steamids}`)
      .toPromise();
  }
  /**
   * Return a list of group ids which user has subscribed
   * @param steamid SteamID of user
   */
  getUserGroupList(steamid: number): Promise<GetUserGroupList> {
    return this.http
      .get<GetUserGroupList>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetUserGroupList/v1/?key=${key}&steamid=${steamid}`)
      .toPromise();
  }
  /**
   * Return steamid of a user, group or game group
   * @param vanityUrl The vanity URL to get a SteamID for
   * @param urlType The type of vanity URL. 1 (default): Individual profile, 2: Group, 3: Official game group
   */
  resolveVanityURL(vanityUrl: string, urlType?: number): Promise<ResolveVanityUrl> {
    let urlParams = '';
    if (urlType) { urlParams += `&url_type=${urlType}`; }

    return this.http
      .get<ResolveVanityUrl>(`${config.STEAM_API_URL}/${this.INTERFACE}/ResolveVanityURL/v1/?key=${key}&vanityurl=${vanityUrl}${urlParams}`)
      .toPromise();
  }

}
