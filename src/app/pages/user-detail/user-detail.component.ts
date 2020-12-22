import { Component, OnInit } from '@angular/core';

import { UserData } from '../../shared/interfaces/data/user-data';
import { SteamUserService } from '../../shared/services/steam-user.service';
import { PlayerService } from '../../shared/services/player.service';
import { getUserData } from '../../shared/helpers/getUserData';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public userData: UserData;

  constructor(
    private steamUser: SteamUserService,
    private player: PlayerService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.userData = await getUserData(76561198094709860, this.steamUser, this.player);
    console.log('user detail: userData', this.userData);
  }

}
