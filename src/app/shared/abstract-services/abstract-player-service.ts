import { Observable } from 'rxjs';

import { GetRecentlyPlayedGames } from '../interfaces/player/get-recently-played-games';
import { GetOwnedGames } from '../interfaces/player/get-owned-games';
import { GetSteamLevel } from '../interfaces/player/get-steam-level';
import { GetBadges } from '../interfaces/player/get-badges';
import { GetCommunityBadgeProgress } from '../interfaces/player/get-community-badge-progress';
import { IsPlayingSharedGame } from '../interfaces/player/is-playing-shared-game';

export abstract class AbstractPlayerService {

  abstract getRecentlyPlayedGames(steamid: number, count?: number): Observable<GetRecentlyPlayedGames>;

  abstract getOwnedGames(steamid: number, includeAppinfo: boolean, includePlayedFreeGames?: boolean, appidsFilter?: number): Observable<GetOwnedGames>;

  abstract getSteamLevel(steamid: number): Observable<GetSteamLevel>;

  abstract getBadges(steamid: number): Observable<GetBadges>;

  abstract getCommunityBadgeProgress(steamid: number, badgeid: number): Observable<GetCommunityBadgeProgress>;

  abstract isPlayingSharedGame(steamid: number, appidPlaying: number): Observable<IsPlayingSharedGame>;

}
