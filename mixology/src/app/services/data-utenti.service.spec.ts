import { TestBed } from '@angular/core/testing';

import { DataUtentiService } from './data-utenti.service';

describe('DataUtentiService', () => {
  let service: DataUtentiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataUtentiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
