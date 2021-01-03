export interface GetSchemaForGame {
  game: SimpleGetSchemaForGame;
}

export interface SimpleGetSchemaForGame {
  gameName: string;
  gameVersion: string;
  availableGameStats: {
    achievements: MultipleAchievements[];
  };
}

export interface MultipleAchievements {
  name: string;
  defaultvalue: number;
  displayName: string;
  hidden: number;
  icon: string;
  icongray: string;
}
