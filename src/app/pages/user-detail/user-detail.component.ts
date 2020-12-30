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
  public steamid: number;
  public nGames: number;

  constructor(
    private steamUser: SteamUserService,
    private player: PlayerService,
  ) { }

  ngOnInit(): void {
    this.steamid = 76561198094709860;
    this.nGames = 3;
    this.getGameData();
  }

  private async getGameData(): Promise<void> {
    this.userData = await getUserData(this.steamid, this.steamUser, this.player);
    console.log('user detail: userData', this.userData);
  }

}
