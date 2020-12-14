import { TestBed } from '@angular/core/testing';

import { SteamUserStatsService } from './steam-user-stats.service';

describe('SteamUserStatsService', () => {
  let service: SteamUserStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SteamUserStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
