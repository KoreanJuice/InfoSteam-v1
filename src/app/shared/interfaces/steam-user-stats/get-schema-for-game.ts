export interface GetSchemaForGame {
  game: {
    gameName: string;
    gameVersion: string;
    availableGameStats: {
      achievements: [
        {
          name: string;
          defaultvalue: string;
          displayName: string;
          hidden: string;
          icon: string;
          icongray: string;
        }
      ]
    }
  };
}
