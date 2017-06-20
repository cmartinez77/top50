import { Component, OnInit } from '@angular/core';
import { ItunesListService } from '../itunes-list.service'
import { ItunesList } from '../itunes-list'

import 'rxjs/add/operator/map';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  feed: ItunesList[];
  activeId: string;

  constructor(private itunesListService: ItunesListService) {
    this.feed = [];
    this.activeId = '';
  }

  ngOnInit() {
    this.itunesListService.getFeed().subscribe(
      (res) => {
        this.setList(res);
      },
        (error) => console.log(error)
      );
  }


  setList(res: any[]) {
    // Function that initializes prepares the data for the view
    // -Argument: result of the itunesListService.getList() function (any[])

    for (let i = 0; i < 3; i++) {
      const list = new ItunesList(res[i].id.label, res[i].title.label, res[i].entry);

      this.feed.push(list);
      if (i === 0) {
        this.activeId = list.id;
      }
    }
  }

  onClicked(id) {
    /* Function that is used to change the current active list */
    this.activeId = id;
  }
}
