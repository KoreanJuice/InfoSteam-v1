import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SteamUserService } from '../../shared/services/steam-user.service';
import { notIdUserRegExp } from '../../shared/helpers/user-reg-exp';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private appid: number;
  private steamid: string;

  constructor(
    private router: Router,
    private steamUser: SteamUserService,
  ) { }

  ngOnInit(): void {
  }

  gameSearch(event: string): void {
    this.appid = parseInt(event, 10);
    this.router.navigate([`/game/${this.appid}`]);
  }

  async userSearch(event: string): Promise<any> {
    if (notIdUserRegExp(event)) {
      const { response } = await this.steamUser.resolveVanityURL(event);

      if (response.success === 1) {
        this.steamid = response.steamid;
      } else {
        // TODO: consider send params to page not found to show error
        this.router.navigate([`User_Not_Found`]);
      }
    }

    this.router.navigate([`/user/${this.steamid}`]);
  }

}
