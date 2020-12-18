export interface GetSchemaForGame {
  game: {
    gameName: string;
    gameVersion: string;
    availableGameStats: {
      achievements: [
        {
          name: string;
          defaultvalue: number;
          displayName: string;
          hidden: number;
          icon: string;
          icongray: string;
        }
      ]
    }
  };
}
