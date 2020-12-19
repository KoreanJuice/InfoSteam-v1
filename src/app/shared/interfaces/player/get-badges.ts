export interface GetBadges {
  response: {
    badges: [
      {
        badgeid: number;
        level: number;
        completion_time: number;
        xp: number;
        communityitemid?: string;
        border_color?: number;
        scarcity: number;
      }
    ];
    player_xp: number;
    player_level: number;
    player_xp_needed_to_level_up: number;
    player_xp_needed_current_level: number;
  };
}
