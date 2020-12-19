import { Observable } from 'rxjs';

import { GetFriendList } from '../interfaces/steam-user/get-friend-list';
import { GetPlayerBans } from '../interfaces/steam-user/get-player-bans';
import { GetPlayerSummaries } from '../interfaces/steam-user/get-player-summaries';
import { GetUserGroupList } from '../interfaces/steam-user/get-user-group-list';
import { ResolveVanityUrl } from '../interfaces/steam-user/resolve-vanity-url';

export abstract class AbstractSteamUserService {

  abstract getFriendList(steamid: number, relationship?: string): Observable<GetFriendList>;

  abstract getPlayerBans(steamids: string): Observable<GetPlayerBans>;

  abstract getPlayerSummaries(steamids: string): Observable<GetPlayerSummaries>;

  abstract getUserGroupList(steamid: number): Observable<GetUserGroupList>;

  abstract resolveVanityURL(vanityurl: string, urlType?: number): Observable<ResolveVanityUrl>;

}
