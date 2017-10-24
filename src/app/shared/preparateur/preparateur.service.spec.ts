import { TestBed, inject } from '@angular/core/testing';

import { PreparateurService } from './preparateur.service';

describe('PreparateurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreparateurService]
    });
  });

  it('should be created', inject([PreparateurService], (service: PreparateurService) => {
    expect(service).toBeTruthy();
  }));
});
