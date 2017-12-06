import { TestBed, inject } from '@angular/core/testing';

import { LowesProdctService } from './lowes-prodct.service';

describe('LowesProdctService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LowesProdctService]
    });
  });

  it('should be created', inject([LowesProdctService], (service: LowesProdctService) => {
    expect(service).toBeTruthy();
  }));
});
