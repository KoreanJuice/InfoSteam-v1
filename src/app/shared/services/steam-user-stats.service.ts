import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { key } from '../../../key';
import * as config from '../../../config.json';
import { GetSchemaForGame } from '../interfaces/steam-user-stats/get-schema-for-game';

@Injectable({
  providedIn: 'root'
})
export class SteamUserStatsService {

  private readonly interface = 'ISteamUserStats';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getSchemaForGame(appid: number): Observable<GetSchemaForGame> {
    return this.httpClient
      .get<GetSchemaForGame>(`${config.STEAM_API_URL}/${this.interface}/GetSchemaForGame/v2/?key=${key}&appid=${appid}`);
  }
}
