import { MultipleGames } from '../player/get-recently-played-games';
import { GameData } from './game-data';

export interface RecentlyPlayedGames {
  recentData: MultipleGames;
  data: GameData;
}
