export interface GetAppList {
  applist: {
    apps: [
      {
        appid: number;
        name: string;
      }
    ]
  };
}
