import { GetRecentlyPlayedGames } from '../interfaces/player/get-recently-played-games';
import { GetOwnedGames } from '../interfaces/player/get-owned-games';
import { GetSteamLevel } from '../interfaces/player/get-steam-level';
import { GetBadges } from '../interfaces/player/get-badges';
import { GetCommunityBadgeProgress } from '../interfaces/player/get-community-badge-progress';
import { IsPlayingSharedGame } from '../interfaces/player/is-playing-shared-game';

export abstract class AbstractPlayerService {

  abstract getRecentlyPlayedGames(steamid: string, count?: number): Promise<GetRecentlyPlayedGames>;

  abstract getOwnedGames(steamid: string, includeAppinfo: boolean, includePlayedFreeGames?: boolean, appidsFilter?: number): Promise<GetOwnedGames>;

  abstract getSteamLevel(steamid: string): Promise<GetSteamLevel>;

  abstract getBadges(steamid: string): Promise<GetBadges>;

  abstract getCommunityBadgeProgress(steamid: string, badgeid: number): Promise<GetCommunityBadgeProgress>;

  abstract isPlayingSharedGame(steamid: string, appidPlaying: number): Promise<IsPlayingSharedGame>;

}
