import { Component, OnInit } from '@angular/core';

import { GetNewsForApp } from '../../shared/interfaces/steam-news/get-news-for-app';
import { SteamNewsService } from '../../shared/services/steam-news.service';

@Component({
  selector: 'app-game-news',
  templateUrl: './game-news.component.html',
  styleUrls: ['./game-news.component.scss']
})
export class GameNewsComponent implements OnInit {

  public gameNews: GetNewsForApp;

  constructor(
    private steamNews: SteamNewsService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.gameNews = await this.steamNews.getNewsForApp(524220);
    console.log('game news: game news', this.gameNews);
  }

}
