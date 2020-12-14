import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { SteamUserService } from '../../shared/services/steam-user.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  @Output() search: EventEmitter<string>;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private steamUser: SteamUserService,
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  private formInit(): void {
    this.form = this.fb.group({ search: [''] });
  }

  onSaveClick(): void {
    if (this.form.valid) {
      const search: string = this.form.get('search').value;

      this.steamUser.resolveVanityURL(search)
        .subscribe(vanityUrl => {
          console.log('event', search);
          console.log('vanityUrl', vanityUrl);
        });
    }
  }

}
