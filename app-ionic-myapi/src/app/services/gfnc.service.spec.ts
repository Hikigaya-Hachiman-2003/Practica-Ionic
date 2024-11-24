import { TestBed } from '@angular/core/testing';

import { GfncService } from './gfnc.service';

describe('GfncService', () => {
  let service: GfncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GfncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
