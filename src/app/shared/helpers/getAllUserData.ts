/**
 * UNUSED FOR NOW
 * UNNECESARY DATA
 * REFACTOR OR DELETE
 */

import { PlayerService } from '../services/player.service';
import { SteamUserStatsService } from '../services/steam-user-stats.service';
import { SteamUserService } from '../services/steam-user.service';

export async function getAllUserData(steamid: number, steamUser: SteamUserService, player: PlayerService, appid: number, steamUserStats: SteamUserStatsService): Promise<any> {
  try {
    const { response: { players } } = await steamUser.getPlayerSummaries(steamid.toString());

    const { response: { badges, player_level } } = await player.getBadges(steamid);

    const { response: { game_count, games } } = await player.getOwnedGames(steamid, true, false);

    const { playerstats: { achievements } } = await steamUserStats.getUserStatsForGame(steamid, appid);

    return {
      player: { ...players }[0],
      badges: { ...badges },
      player_level,
      game_count,
      games: { ...games },
      achievements
    };

  } catch (error) {
    console.error('Error while retrieving all user data', error);
  }

}
