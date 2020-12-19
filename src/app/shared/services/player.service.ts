import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { key } from '../../../key';
import * as config from '../../../config.json';
import { AbstractPlayerService } from '../abstract-services/abstract-player-service';
import { GetBadges } from '../interfaces/player/get-badges';
import { GetCommunityBadgeProgress } from '../interfaces/player/get-community-badge-progress';
import { GetOwnedGames } from '../interfaces/player/get-owned-games';
import { GetRecentlyPlayedGames } from '../interfaces/player/get-recently-played-games';
import { GetSteamLevel } from '../interfaces/player/get-steam-level';
import { IsPlayingSharedGame } from '../interfaces/player/is-playing-shared-game';

@Injectable({
  providedIn: 'root'
})
export class PlayerService extends AbstractPlayerService {

  private readonly INTERFACE = 'IPlayerService';

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  getRecentlyPlayedGames(steamid: number, count?: number): Observable<GetRecentlyPlayedGames> {
    let urlParams: string;
    if (count) { urlParams += `&count=${count}`; }

    return this.http
      .get<GetRecentlyPlayedGames>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetRecentlyPlayedGames/v1/?key=${key}&steamid=${steamid}${urlParams}`);
  }

  getOwnedGames(steamid: number, includeAppinfo: boolean, includePlayedFreeGames?: boolean, appidsFilter?: number): Observable<GetOwnedGames> {
    let urlParams: string;
    if (includePlayedFreeGames) { urlParams += `&include_played_free_games=${includePlayedFreeGames}`; }
    if (appidsFilter) { urlParams += `&appids_filter=${appidsFilter}`; }

    return this.http
      .get<GetOwnedGames>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetOwnedGames/v1/?key=${key}&steamid=${steamid}&include_appinfo=${includeAppinfo}${urlParams}`);
  }

  getSteamLevel(steamid: number): Observable<GetSteamLevel> {
    return this.http
      .get<GetSteamLevel>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetSteamLevel/v1/?key=${key}&steamid=${steamid}`);
  }

  getBadges(steamid: number): Observable<GetBadges> {
    return this.http
      .get<GetBadges>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetBadges/v1/?key=${key}&steamid=${steamid}`);
  }

  getCommunityBadgeProgress(steamid: number, badgeid: number): Observable<GetCommunityBadgeProgress> {
    return this.http
      .get<GetCommunityBadgeProgress>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetCommunityBadgeProgress/v1/?key=${key}&steamid=${steamid}&badgeid=${badgeid}`);
  }

  isPlayingSharedGame(steamid: number, appidPlaying: number): Observable<IsPlayingSharedGame> {
    return this.http
      .get<IsPlayingSharedGame>(`${config.STEAM_API_URL}/${this.INTERFACE}/IsPlayingSharedGame/v1/?key=${key}&steamid=${steamid}&appid_playing=${appidPlaying}`);
  }

}
