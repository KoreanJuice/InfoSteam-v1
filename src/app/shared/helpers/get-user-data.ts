import { PlayerService } from '../services/player.service';
import { SteamUserService } from '../services/steam-user.service';
import { UserData } from '../interfaces/data/user-data';

export async function getUserData(steamid: string, steamUser: SteamUserService, player: PlayerService): Promise<UserData> {
  const { response: { players } } = await steamUser.getPlayerSummaries(steamid.toString());

  const { response: { player_level } } = await player.getSteamLevel(steamid);

  const { response: { game_count } } = await player.getOwnedGames(steamid, true, false);

  const { friendslist: { friends } } = await steamUser.getFriendList(steamid);

  let steamids = '';
  for (const friend of friends) { steamids += `${friend.steamid},`; }

  const { response } = await steamUser.getPlayerSummaries(steamids);

  return {
    player: { ...players }[0],
    player_level,
    game_count,
    friends: response,
  };

}
