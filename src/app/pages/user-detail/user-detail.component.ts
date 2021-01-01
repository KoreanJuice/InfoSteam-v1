import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SteamUserService } from '../../shared/services/steam-user.service';
import { PlayerService } from '../../shared/services/player.service';
import { UserData } from '../../shared/interfaces/data/user-data';
import { getUserData } from '../../shared/helpers/get-user-data';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public userData: UserData;
  public nGames: number;
  public steamid: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private steamUser: SteamUserService,
    private player: PlayerService,
  ) { }

  ngOnInit(): void {
    this.nGames = 3;
    this.route.params
      .subscribe(params => {
        this.steamid = params.steamid;
        this.getUserData(this.steamid);
      });
  }

  private async getUserData(steamid: string): Promise<void> {
    try {
      this.userData = await getUserData(steamid, this.steamUser, this.player);
    } catch (error) {
      console.error('Error while retrieving user data', error);
      this.router.navigate(['Page_Not_Found']);
    }
  }

}
