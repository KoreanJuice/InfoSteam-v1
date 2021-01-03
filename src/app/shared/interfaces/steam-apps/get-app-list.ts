export interface GetAppList {
  applist: SimpleGetAppList;
}

export interface SimpleGetAppList {
  apps: MultipleApps[];
}

export interface MultipleApps {
  appid: number;
  name: string;
}
