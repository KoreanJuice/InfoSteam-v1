import { Component, OnInit } from '@angular/core';

import { SteamUserService } from '../../shared/services/steam-user.service';
import { ResolveVanityUrl } from '../../shared/interfaces/steam-user/resolve-vanity-url';
import { userRegExp } from '../../shared/helpers/userRegExp';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private gameSearched: number;
  private userSearched: string | number;

  constructor(
    private steamUser: SteamUserService,
  ) { }

  ngOnInit(): void {
  }

  gameSearch(event: string): void {
    const appid = parseInt(event, 10);
    this.gameSearched = appid;
    // TODO: route to game detail
  }

  async userSearch(event: string): Promise<any> {
    if (userRegExp(event)) {
      let resolvedUrl: ResolveVanityUrl;
      resolvedUrl = await this.steamUser.resolveVanityURL(event);

      if (resolvedUrl.respone.success === 1) {
        const steamid = resolvedUrl.respone.steamid;
        this.userSearched = parseInt(steamid, 10);
      }
    }
    this.userSearched = parseInt(event, 10);
    // TODO: route to user detail

  }

}
