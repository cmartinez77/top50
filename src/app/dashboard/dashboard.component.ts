import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

import { ItunesListService } from '../shared/itunes-list.service'
import { ItunesList } from '../shared/itunes-list'

class ItunesListServiceStub {
  getFeed() {};
}

@Component({
  selector:     'app-dashboard',
  templateUrl:  './dashboard.component.html',
  styleUrls:    ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // public properties
  feed:     ItunesList[];
  activeId: string;

  constructor(private itunesListService: ItunesListService) {
    this.feed = [];
    this.activeId = '';
  }

  ngOnInit() {
    this.getFeed();
  }

  // public functions
  onClicked(id: string) {
    // Function that is used to change the current active list
    this.activeId = id;
  }

  getFeed() {
    this.itunesListService.getFeed().subscribe(
      (res) => {
        this.parseFeedResult(res);
      },
      (error) => console.log(error)
    );
  }

  // private functions
  private parseFeedResult(res: any[]) {
    // Function that initializes prepares the data for the view
    // -Argument: result of the itunesListService.getList() function (any[])

    for (let i = 0; i < 3; i++) {
      const list = new ItunesList(res[i].feed.id.label, res[i].feed.title.label, res[i].feed.entry);

      this.feed.push(list);
      if (i === 0) {
        this.activeId = list.id;
      }
    }
  }


}
