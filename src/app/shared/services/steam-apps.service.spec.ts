import { TestBed } from '@angular/core/testing';

import { SteamAppsService } from './steam-apps.service';

describe('SteamAppsService', () => {
  let service: SteamAppsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SteamAppsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
