import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { key } from '../../../key';
import * as config from '../../../config.json';
import { GetPlayerSummaries } from '../interfaces/steam-user/get-player-summaries';
import { ResolveVanityUrl } from '../interfaces/steam-user/resolve-vanity-url';

@Injectable({
  providedIn: 'root'
})
export class SteamUserService {

  private readonly interface = 'ISteamUser';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getPlayerSummaries(steamids: number): Observable<GetPlayerSummaries> {
    return this.httpClient
      .get<GetPlayerSummaries>(`${config.STEAM_API_URL}/${this.interface}/GetPlayerSummaries/v2/?key=${key}&steamids=${steamids}`);
  }

  public resolveVanityURL(vanityUrl: string): Observable<ResolveVanityUrl> {
    return this.httpClient
      .get<ResolveVanityUrl>(`${config.STEAM_API_URL}/${this.interface}/ResolveVanityURL/v1/?key=${key}&vanityurl=${vanityUrl}`);
  }
}
