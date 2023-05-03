import { TestBed } from '@angular/core/testing';

import { TextToDbService } from './text-to-db.service';

describe('TextToDbService', () => {
  let service: TextToDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextToDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
