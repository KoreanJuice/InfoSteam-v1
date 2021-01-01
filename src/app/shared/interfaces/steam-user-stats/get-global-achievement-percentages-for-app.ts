export interface GetGlobalAchievementPercentagesForApp {
  achievementpercentages: SimpleGetGlobalAchievementPercentagesForApp;
}

export interface SimpleGetGlobalAchievementPercentagesForApp {
  achievements: {
    achievement: MultimpleAchievements[];
  };
}

export interface MultimpleAchievements {
  name: string;
  percent: number;
}
