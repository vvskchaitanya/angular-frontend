import { TestBed } from '@angular/core/testing';

import { SharesService } from './shares.service';

describe('SharesService', () => {
  let service: SharesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
