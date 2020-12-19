export interface GetGlobalAchievementPercentagesForApp {
  achievementpercentages: {
    achievements: {
      achievement: [
        {
          name: string;
          percent: number;
        }
      ]
    }
  };
}
