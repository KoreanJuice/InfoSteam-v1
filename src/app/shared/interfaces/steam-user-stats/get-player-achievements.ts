export interface GetPlayerAchievements {
  playerstats: SimpleGetPlayerAchievements;
}

export interface SimpleGetPlayerAchievements {
  steamID: string;
  gameName: string;
  achievements: MultipleAchievements[];
  success: boolean;
}

export interface MultipleAchievements {
  apiname: string;
  achieved: number;
  unlocktime: number;
}
