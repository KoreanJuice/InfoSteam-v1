import { GetPlayerSummaries } from '../steam-user/get-player-summaries';

export interface UserData {
  player: GetPlayerSummaries;
  player_level: number;
  game_count: number;
  friends: GetPlayerSummaries[];
}
