export interface GetUserStatsForGame {
  playerstats: {
    steamID: string;
    gameName: string;
    achievements: any;
    // TODO: wrong returned data
  };
}
