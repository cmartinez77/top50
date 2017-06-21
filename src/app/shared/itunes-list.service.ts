import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx'

import {ItunesList} from './itunes-list';
import 'rxjs/add/operator/map';

@Injectable()
export class ItunesListService {
  urls: string[];

  constructor(private http: Http) {
    this.urls = [
      'https://itunes.apple.com/us/rss/topaudiobooks/limit=50/json',
      'https://itunes.apple.com/us/rss/topalbums/limit=50/json',
      'https://itunes.apple.com/us/rss/toppodcasts/limit=50/json'
    ];

  }


  getFeed(): Observable<ItunesList[]> {
    // getFeed function that uses REST get request to grab a RSS feed
    //  -Arguments: NA
    //  - Returns: array of observable

    return Observable.forkJoin(
      this.http.get(this.urls[0]).map((res) => <ItunesList>res.json()),
      this.http.get(this.urls[1]).map((res) => <ItunesList>res.json()),
      this.http.get(this.urls[2]).map((res) => <ItunesList>res.json())
    );
  }

}
