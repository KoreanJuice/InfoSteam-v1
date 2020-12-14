import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GetSchemaForGame } from '../interfaces/steam-user-stats/get-schema-for-game';
import { key } from '../../../key';
import { url } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class SteamUserStatsService {

  private readonly interface = 'ISteamUserStats';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getSchemaForGame(appid: string): Observable<GetSchemaForGame> {
    return this.httpClient.get<GetSchemaForGame>(`${url}/${this.interface}/GetSchemaForGame/v2/?key=${key}&appid=${appid}`);
  }
}
