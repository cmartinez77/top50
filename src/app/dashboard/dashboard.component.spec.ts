import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule} from '@angular/http';

import { DashboardComponent } from './dashboard.component';
import { ItunesListService } from '../shared/itunes-list.service'
import {ItunesList} from '../shared/itunes-list';
import {observable} from "rxjs/symbol/observable";
import {Observable} from "rxjs/Observable";

describe('DashboardComponent', () => {
  let component:  DashboardComponent;
  let fixture:    ComponentFixture<DashboardComponent>;
  // let spy:        jasmine.Spy;
  let itunesListService: ItunesListService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [ItunesListService],
      // providers: [{provide: ItunesListService, useClass: ItunesListServiceStub}],
      imports: [HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    itunesListService = TestBed.get(ItunesListService);
    // spy = spyOn(itunesListService, 'getFeed');

    fixture.detectChanges();
    component.feed = [
    new ItunesList('1', 'title1', [
      {'im:name': {'label': 'name1'}, 'im:artist': {'label': 'artist1'},
        'im:image': [ {'label': '1-1'}, {'label': '1-2'}, {'label': '1-3'}]}
    ]),
      new ItunesList('2', 'title2', [
        {'im:name': {'label': 'name2'}, 'im:artist': {'label': 'artist2'},
          'im:image': [ {'label': '2-1'}, {'label': '2-2'}, {'label': '2-3'}]}
      ]),
    ];

  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('div title should `title1`', () => {
    component.ngOnInit();
    // spy.calls.any();
    fixture.detectChanges();
    const li = fixture.nativeElement.querySelector('ul li a');
    expect(li.textContent).toBe('title1')
  });

  it('div title should `title2`', () => {
    component.onClicked('2');
    fixture.detectChanges();
    const li = fixture.nativeElement.querySelectorAll('ul li a');
    expect(li[1].textContent).toBe('title2')
  });

});
