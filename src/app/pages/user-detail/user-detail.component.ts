import { Component, OnInit } from '@angular/core';

import { PlayerService } from '../../shared/services/player.service';
import { SteamUserService } from '../../shared/services/steam-user.service';

import { getUserData } from '../../shared/helpers/getUserData';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public userData: any;
  public allUserData: any;

  constructor(
    private steamUser: SteamUserService,
    private player: PlayerService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.userData = await getUserData(76561198094709860, this.steamUser, this.player);
    console.log('recommended games: userData', this.userData);
  }

}
