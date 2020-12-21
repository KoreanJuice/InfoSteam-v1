import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.scss']
})
export class GameSearchComponent implements OnInit {

  @Output() gameSearch = new EventEmitter<any>();

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  private formInit(): void {
    this.form = this.fb.group({ gameSearch: ['', Validators.pattern(/([0-9])+/g)] });
  }

  onSendClick(): void {
    if (this.form.valid) {
      const gameSearch: number = this.form.get('gameSearch').value;

      this.gameSearch.emit({
        gameSearch
      });
    }
  }

}
