import { Observable } from 'rxjs';

import { GetNewsForApp } from '../interfaces/steam-news/get-news-for-app';

export abstract class AbstractSteamNewsService {

  abstract getNewsForApp(appid: number, maxlength?: number, enddate?: number, count?: number, feeds?: string): Observable<GetNewsForApp>;

}
