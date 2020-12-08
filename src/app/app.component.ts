import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = 'InfoSteam';
  public over = 'over';
  public loading: boolean;

  constructor(
  ) { }

  ngOnInit(): void {
    this.loading = false;
  }

}
