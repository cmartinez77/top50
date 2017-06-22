import { TestBed, inject } from '@angular/core/testing';

import { ItunesListService } from './itunes-list.service';
import {HttpModule} from '@angular/http';

// let service: ItunesListService;

describe('ItunesListService initialization', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItunesListService],
      imports: [HttpModule]
    });

    // service = new ItunesListService(null);
  });

  it('should be created', inject([ItunesListService], (service: ItunesListService) => {
    expect(service).toBeTruthy();
  }));

  it('should have the urls array initialized with 3 items', inject([ItunesListService], (service: ItunesListService) => {
    expect(service.urls.length).toBe(3);
  }));

});
