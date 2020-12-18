import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-most-played-games',
  templateUrl: './most-played-games.component.html',
  styleUrls: ['./most-played-games.component.scss']
})
export class MostPlayedGamesComponent implements OnInit {

  gameData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
