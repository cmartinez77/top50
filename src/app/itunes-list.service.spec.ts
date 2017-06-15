import { TestBed, inject } from '@angular/core/testing';

import { ItunesListService } from './itunes-list.service';

describe('ItunesListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItunesListService]
    });
  });

  it('should be created', inject([ItunesListService], (service: ItunesListService) => {
    expect(service).toBeTruthy();
  }));
});
