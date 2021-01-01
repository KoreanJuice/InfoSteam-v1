import { SimpleGetSchemaForGame } from '../steam-user-stats/get-schema-for-game';

export interface GameData {
  game: SimpleGetSchemaForGame;
  appid: number;
  gameName: string;
  gameImage: string;
  player_count: number;
}
