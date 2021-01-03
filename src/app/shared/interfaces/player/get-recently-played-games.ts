export interface GetRecentlyPlayedGames {
  response: SimpleGetRecentlyPlayedGames;
}

export interface SimpleGetRecentlyPlayedGames {
  total_count: number;
  games: MultipleGames[];
}

export interface MultipleGames {
  appid: number;
  name: string;
  playtime_2weeks: number;
  playtime_forever: number;
  img_icon_url: string;
  img_logo_url: string;
  playtime_windows_forever: number;
  playtime_mac_forever: number;
  playtime_linux_forever: number;
}
