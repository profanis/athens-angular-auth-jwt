import { TestBed, inject } from '@angular/core/testing';

import { MuseumService } from './museum.service';

describe('MuseumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MuseumService]
    });
  });

  it('should be created', inject([MuseumService], (service: MuseumService) => {
    expect(service).toBeTruthy();
  }));
});
