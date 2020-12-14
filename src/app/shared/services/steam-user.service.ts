import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GetPlayerSummaries } from '../interfaces/steam-user/get-player-summaries';
import { ResolveVanityUrl } from '../interfaces/steam-user/resolve-vanity-url';
import { key } from '../../../key';
import { url } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class SteamUserService {

  private readonly interface = 'ISteamUser';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getPlayerSummaries(steamids: string): Observable<GetPlayerSummaries> {
    return this.httpClient.get<GetPlayerSummaries>(`${url}/${this.interface}/GetPlayerSummaries/v2/?key=${key}&steamids=${steamids}`);
  }

  public resolveVanityURL(vanityUrl: string): Observable<ResolveVanityUrl> {
    return this.httpClient.get<ResolveVanityUrl>(`${url}/${this.interface}/ResolveVanityURL/v1/?key=${key}&vanityurl=${vanityUrl}`);
  }
}
