export interface GetBadges {
  response: SimpleGetBadges;
}

export interface SimpleGetBadges {
  badges: MultipleBadges[];
  player_xp: number;
  player_level: number;
  player_xp_needed_to_level_up: number;
  player_xp_needed_current_level: number;
}

export interface MultipleBadges {
  badgeid: number;
  level: number;
  completion_time: number;
  xp: number;
  communityitemid?: string;
  border_color?: number;
  scarcity: number;
}
