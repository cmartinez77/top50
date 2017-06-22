import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule} from '@angular/http';

import { DashboardComponent } from './dashboard.component';
import { ItunesListService } from '../shared/itunes-list.service';
import {ItunesList} from '../shared/itunes-list';
import {Observable} from 'rxjs/Observable';

describe('DashboardComponent data initialization and manipulation', () => {
  let component:  DashboardComponent;
  let itunesListService: ItunesListService;
  let data: any[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [ItunesListService],
      imports: [HttpModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    itunesListService = new ItunesListService(null);
    // fixture = TestBed.createComponent(DashboardComponent);
    // component = fixture.componentInstance;
    component = new DashboardComponent(itunesListService);
    data = [ [
      { 'itunesLists': {'id': {'label': '1'}, 'title': {'label': 'title1'}, 'entry': [ {'im:name': {'label': 'name1'},
        'im:artist': {'label': 'artist1'}, 'im:image': [ {'label': '1-1'}, {'label': '1-2'}, {'label': '1-3'}] } ]} },

      { 'itunesLists': {'id': {'label': '2'}, 'title': {'label': 'title1'}, 'entry': [ {'im:name': {'label': 'name2'},
        'im:artist': {'label': 'artist2'}, 'im:image': [ {'label': '2-1'}, {'label': '2-2'}, {'label': '2-3'}] } ]} },

      { 'itunesLists': {'id': {'label': '3'}, 'title': {'label': 'title1'}, 'entry': [ {'im:name': {'label': 'name3'},
        'im:artist': {'label': 'artist3'}, 'im:image': [ {'label': '3-1'}, {'label': '3-2'}, {'label': '3-3'}] } ]} }
    ] ]

  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have an uninitialized activeId set to ``', () => {
    expect(component.activeId).toBe('');
  });

  it('should have an uninitialized itunesLists array set to []', () => {
    expect(component.itunesLists).toEqual([]);
  });

  it('should return Observables array of 3 objects', () => {
    spyOn(itunesListService, 'getFeed').and.callFake( () => {
      return Observable.from( data )
    });

    component.ngOnInit();

    expect(component.itunesLists.length).toBe(3);

  });

  it('should have `title1` as the title in the first object in the set itunesLists array', () => {
    spyOn(itunesListService, 'getFeed').and.callFake( () => {
      return Observable.from( data )
    });

    component.ngOnInit();

    expect(component.itunesLists[0].title).toBe('title1');

  });

  it('should have activeId set the id of the first object in the set itunesLists array', () => {
    spyOn(itunesListService, 'getFeed').and.callFake( () => {
      return Observable.from( data )
    });

    component.ngOnInit();

    expect(component.activeId).toBe(component.itunesLists[0].id);

  });


});
