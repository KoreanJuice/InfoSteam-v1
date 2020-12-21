import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  @Output() userSearch = new EventEmitter<any>();

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  private formInit(): void {
    this.form = this.fb.group({ userSearch: ['', Validators.pattern(/([0-9])+/g)] });
  }

  onSendClick(): void {
    if (this.form.valid) {
      const userSearch: string = this.form.get('userSearch').value;

      this.userSearch.emit({
        userSearch
      });
    }
  }

}
