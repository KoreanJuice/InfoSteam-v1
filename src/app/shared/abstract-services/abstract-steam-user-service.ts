import { GetFriendList } from '../interfaces/steam-user/get-friend-list';
import { GetPlayerBans } from '../interfaces/steam-user/get-player-bans';
import { GetPlayerSummaries } from '../interfaces/steam-user/get-player-summaries';
import { GetUserGroupList } from '../interfaces/steam-user/get-user-group-list';
import { ResolveVanityUrl } from '../interfaces/steam-user/resolve-vanity-url';

export abstract class AbstractSteamUserService {

  abstract getFriendList(steamid: string, relationship?: string): Promise<GetFriendList>;

  abstract getPlayerBans(steamids: string): Promise<GetPlayerBans>;

  abstract getPlayerSummaries(steamids: string): Promise<GetPlayerSummaries>;

  abstract getUserGroupList(steamid: string): Promise<GetUserGroupList>;

  abstract resolveVanityURL(vanityurl: string, urlType?: number): Promise<ResolveVanityUrl>;

}
