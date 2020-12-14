import { Component, OnInit } from '@angular/core';
import { SteamUserStatsService } from '../../shared/services/steam-user-stats.service';

@Component({
  selector: 'app-most-played-games',
  templateUrl: './most-played-games.component.html',
  styleUrls: ['./most-played-games.component.scss']
})
export class MostPlayedGamesComponent implements OnInit {

  constructor(
    private steamUserStats: SteamUserStatsService,
  ) { }

  ngOnInit(): void {
  }

  nierData(): void {
    this.steamUserStats.getSchemaForGame('524220')
      .subscribe(game => {
        console.log('game', game);
      });
  }

}
