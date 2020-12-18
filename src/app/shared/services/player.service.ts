import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { key } from '../../../key';
import * as config from '../../../config.json';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private readonly interface = 'IPlayerService';

  constructor(
    private httpClient: HttpClient
  ) { }


}
