import { TestBed } from '@angular/core/testing';

import { SteamUserService } from './steam-user.service';

describe('SteamUserService', () => {
  let service: SteamUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SteamUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
