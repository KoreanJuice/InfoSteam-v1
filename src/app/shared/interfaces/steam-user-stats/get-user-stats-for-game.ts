export interface GetUserStatsForGame {
  playerstats: {
    steamID: string;
    gameName: string;
    achievements: any;
    // TODO: interface: wrong returned data
  };
}
