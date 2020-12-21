import { GetSchemaForGame } from '../steam-user-stats/get-schema-for-game';

export interface GameData {
  game: GetSchemaForGame;
  appid: number;
  gameName: string;
  gameImage: string;
  player_count: number;
}
