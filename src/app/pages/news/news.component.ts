import { Component, OnInit } from '@angular/core';

import { SteamAppsService } from '../../shared/services/steam-apps.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public nNews: number;
  public appid: number;
  public gameName: string;

  constructor(
    private steamApps: SteamAppsService,
  ) { }

  ngOnInit(): void {
    this.nNews = 3;
  }

  gameSearch(event: string): void {
    const appid = parseInt(event, 10);
    this.appid = appid;
    this.getNameApp();
  }

  private async getNameApp(): Promise<void> {
    const { applist: { apps } } = await this.steamApps.getAppList();

    const { name } = apps.find((app) => app.appid === this.appid);

    this.gameName = name;
  }

}
