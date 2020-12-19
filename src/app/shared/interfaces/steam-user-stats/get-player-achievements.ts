export interface GetPlayerAchievements {
  playerstats: {
    steamID: string;
    gameName: string;
    achievements: [
      {
        apiname: string;
        achieved: number;
        unlocktime: number;
      }
    ];
    success: boolean;
  };
}
