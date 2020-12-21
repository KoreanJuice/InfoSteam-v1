import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  /**
   * Gets information about a player's recently played games
   * @param steamid The player we're asking about
   * @param count The number of games to return (0/unset: all)
   */
  getRecentlyPlayedGames(steamid: number, count?: number): Promise<GetRecentlyPlayedGames> {
    let urlParams = '';
    if (count) { urlParams += `&count=${count}`; }

    return this.http
      .get<GetRecentlyPlayedGames>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetRecentlyPlayedGames/v1/?key=${key}&steamid=${steamid}${urlParams}`)
      .toPromise();
  }
  /**
   * Return a list of games owned by the player
   * @param steamid The player we're asking about
   * @param includeAppinfo true if we want additional details (name, icon) about each game
   * @param includePlayedFreeGames Free games are excluded by default. If this is set, free games the user has played will be returned.
   * @param appidsFilter if set, restricts result set to the passed in apps
   */
  getOwnedGames(steamid: number, includeAppinfo: boolean, includePlayedFreeGames?: boolean, appidsFilter?: number): Promise<GetOwnedGames> {
    let urlParams = '';
    if (includePlayedFreeGames !== undefined) { urlParams += `&include_played_free_games=${includePlayedFreeGames}`; }
    if (appidsFilter) { urlParams += `&appids_filter=${appidsFilter}`; }

    return this.http
      .get<GetOwnedGames>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetOwnedGames/v1/?key=${key}&steamid=${steamid}&include_appinfo=${includeAppinfo}${urlParams}`)
      .toPromise();
  }
  /**
   * Returns the Steam Level of a user
   * @param steamid The player we're asking about
   */
  getSteamLevel(steamid: number): Promise<GetSteamLevel> {
    return this.http
      .get<GetSteamLevel>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetSteamLevel/v1/?key=${key}&steamid=${steamid}`)
      .toPromise();
  }
  /**
   * Gets badges that are owned by a specific user
   * @param steamid The player we're asking about
   */
  getBadges(steamid: number): Promise<GetBadges> {
    return this.http
      .get<GetBadges>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetBadges/v1/?key=${key}&steamid=${steamid}`)
      .toPromise();
  }
  /**
   * Gets all the quests needed to get the specified badge, and which are completed
   * @param steamid The player we're asking about
   * @param badgeid The badge we're asking about
   */
  getCommunityBadgeProgress(steamid: number, badgeid: number): Promise<GetCommunityBadgeProgress> {
    return this.http
      .get<GetCommunityBadgeProgress>(`${config.STEAM_API_URL}/${this.INTERFACE}/GetCommunityBadgeProgress/v1/?key=${key}&steamid=${steamid}&badgeid=${badgeid}`)
      .toPromise();
  }
  /**
   * Returns valid lender SteamID if game currently played is borrowed
   * @param steamid The player we're asking about
   * @param appidPlaying The game player is currently playing
   */
  isPlayingSharedGame(steamid: number, appidPlaying: number): Promise<IsPlayingSharedGame> {
    return this.http
      .get<IsPlayingSharedGame>(`${config.STEAM_API_URL}/${this.INTERFACE}/IsPlayingSharedGame/v1/?key=${key}&steamid=${steamid}&appid_playing=${appidPlaying}`)
      .toPromise();
  }

}
