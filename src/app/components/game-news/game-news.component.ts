import { Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';

import { GetNewsForApp } from '../../shared/interfaces/steam-news/get-news-for-app';
import { SteamNewsService } from '../../shared/services/steam-news.service';

@Component({
  selector: 'app-game-news',
  templateUrl: './game-news.component.html',
  styleUrls: ['./game-news.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GameNewsComponent implements OnChanges {

  @Input() nNews: number;
  @Input() appid: number;

  public gameNews: GetNewsForApp;

  constructor(
    private steamNews: SteamNewsService,
  ) { }

  ngOnChanges(): void {
    if (this.appid) { this.getGameNews(); }
  }

  private async getGameNews(): Promise<void> {
    this.gameNews = await this.steamNews.getNewsForApp(this.appid, 0, this.nNews);
  }

}
