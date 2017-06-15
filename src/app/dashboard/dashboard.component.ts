import { Component, OnInit } from '@angular/core';
import { ItunesListService } from '../itunes-list.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private itunesListService: ItunesListService) { }

  ngOnInit() {
  }


  getList(){
    //Just used for testing until I get the JSON request down.
    //  -Button in dashboard.component.html calls this functon
    //  -Calls ItunesListService's getList()
    //  -Prints to console the observable returned from getList(), not yet a json object
    
    this.itunesListService.getList().subscribe(
      (res) => console.log(res),
      (error) => console.log(error),
      () => console.log('Complete')
    );
  }

}
