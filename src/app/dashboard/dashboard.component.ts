import { Component, OnInit } from '@angular/core';
import { ItunesListService } from '../itunes-list.service'

import 'rxjs/add/operator/map';

export class itunesList {
  title: string;
  id: string;
  itunesElements: itunesElement[];

}

export class itunesElement {
  artistId: string;
  artistName: string;
  artistUrl: string;
  artworkUrl100: string;
  contentAdvisoryBoard: string;
  copyright: string;
  genreNames: string[];
  id: string;
  kind: string;
  name: string;
  primaryGenreName: string;
  releaseDate: string;
  trackCensoredName: string;
  trackExplicitness: string;
  url: string;
  version: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  urls : string[];
  results: itunesList[];
  activeId: string;

  constructor(private itunesListService: ItunesListService) { 
    this.urls = [];
    this.urls.push('https://rss.itunes.apple.com/api/v1/us/music-videos/top-music-videos/10/explicit/json');
    // this.urls.push('https://rss.itunes.apple.com/api/v1/us/music-videos/top-music-videos/10/explicit/json');
    // this.urls.push('https://rss.itunes.apple.com/api/v1/us/music-videos/top-music-videos/10/explicit/json');
    this.urls.push('https://rss.itunes.apple.com/api/v1/us/ios-apps/new-apps-we-love/10/explicit/json');
    this.urls.push('https://rss.itunes.apple.com/api/v1/us/books/top-free/10/explicit/json')

    this.results =[];
    this.activeId ="";
  }

  ngOnInit() {

    for(let i =0; i < 3; i++)
    {
      this.itunesListService.getList(this.urls[i]).subscribe(
        (res) => {   
          console.log(res);
          let list = new itunesList;

          list.title = res.feed.title;
          list.id = res.feed.id;
          list.itunesElements = res.feed.results;

          if(i == 0){
            this.activeId = list.id;
          }


          this.results.push(list)
        },
        (error) => console.log(error)
      );
    }
    
  }

  onClicked( id)
  {
      console.log(id)
      this.activeId = id;
  }


  printList(){
    //Just used for testing until I get the JSON request down.
    //  -Button in dashboard.component.html calls this functon
    //  -Calls ItunesListService's getList()
    //  -Prints to console the observable returned from getList(), not yet a json object
    
    console.log(this.results);

  }

}
