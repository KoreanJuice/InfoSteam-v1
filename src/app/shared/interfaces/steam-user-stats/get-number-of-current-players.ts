export interface GetNumberOfCurrentPlayers {
  response: SimpleGetNumberOfCurrentPlayers;
}

export interface SimpleGetNumberOfCurrentPlayers {
  player_count: number;
  result: number;
}
