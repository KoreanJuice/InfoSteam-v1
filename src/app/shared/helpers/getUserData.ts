import { PlayerService } from '../services/player.service';
import { SteamUserService } from '../services/steam-user.service';

export async function getUserData(steamid: number, steamUser: SteamUserService, player: PlayerService): Promise<any> {
  try {
    const { response: { players } } = await steamUser.getPlayerSummaries(steamid.toString()).toPromise();

    const { response: { player_level } } = await player.getSteamLevel(steamid).toPromise();

    const { response: { game_count } } = await player.getOwnedGames(steamid, true, false).toPromise();

    const { friendslist: { friends } } = await steamUser.getFriendList(steamid).toPromise();
    let steamids = '';
    friends.forEach(friend => { steamids += `${friend.steamid},`; });
    const { response } = await steamUser.getPlayerSummaries(steamids).toPromise();

    return {
      player: { ...players }[0],
      player_level,
      game_count,
      friends: response
    };

  } catch (error) {
    console.error('Error while retrieving user data', error);
  }
}
