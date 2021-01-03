export interface GetNewsForApp {
  appnews: SimpleGetNewsForApp;
}

export interface SimpleGetNewsForApp {
  appid: number;
  newsitems: MultipleNewsItems[];
  count: number;
}

export interface MultipleNewsItems {
  gid: string;
  title: string;
  url: string;
  is_external_url: boolean;
  author: string;
  contents: string;
  feedlabel: string;
  date: number;
  feedname: string;
  feed_type: number;
  appid: number;
  tags: string[];
}
