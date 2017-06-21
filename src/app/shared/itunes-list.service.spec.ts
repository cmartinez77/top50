import { TestBed, inject } from '@angular/core/testing';

import { ItunesListService } from './itunes-list.service';
import {HttpModule} from '@angular/http';

describe('ItunesListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItunesListService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([ItunesListService], (service: ItunesListService) => {
    expect(service).toBeTruthy();
  }));
});
