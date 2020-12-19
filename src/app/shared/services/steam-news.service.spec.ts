import { TestBed } from '@angular/core/testing';

import { SteamNewsService } from './steam-news.service';

describe('SteamNewsService', () => {
  let service: SteamNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SteamNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
