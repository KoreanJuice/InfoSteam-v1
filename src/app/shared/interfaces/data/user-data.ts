import { MultiplePlayerSummaries, SinglePlayerSummaries } from '../steam-user/get-player-summaries';

export interface UserData {
  player: SinglePlayerSummaries;
  player_level: number;
  game_count: number;
  friends: MultiplePlayerSummaries;
}
