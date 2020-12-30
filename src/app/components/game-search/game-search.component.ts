import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.scss']
})
export class GameSearchComponent implements OnInit {

  @Output() gameSearch = new EventEmitter<string>();

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  private formInit(): void {
    this.form = this.fb.group({ gameSearch: ['', Validators.pattern(/\d+/g)] });
  }

  public onSendClick(): void {
    if (this.form.valid) {
      const gameSearch: string = this.form.get('gameSearch').value;

      this.gameSearch.emit(gameSearch);
    }
  }

}
