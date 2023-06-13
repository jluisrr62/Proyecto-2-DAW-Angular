import { TestBed } from '@angular/core/testing';

import { RecogidaService } from './recogida.service';

describe('RecogidaService', () => {
  let service: RecogidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecogidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
