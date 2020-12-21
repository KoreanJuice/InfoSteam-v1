import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() gameSearchIn: any;
  @Input() userSearchIn: any;

  public recommendedGamesOut: any = [524220, 237930, 312750, 987720];

  constructor() { }

  ngOnInit(): void {
    console.log('home game-search input', this.gameSearchIn);
    console.log('home user-search input', this.userSearchIn);
  }

}
