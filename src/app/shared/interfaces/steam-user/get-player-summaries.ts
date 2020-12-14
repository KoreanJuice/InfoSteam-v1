export interface GetPlayerSummaries {
  respone: {
    players: [
      {
        steamid: string;
        communityvisibilitystate: string;
        profilestate: string;
        personaname: string;
        lastlogoff: string;
        profileurl: string;
        avatar: string;
        avatarmedium: string;
        avatarfull: string;
      }
    ]
  };
}
