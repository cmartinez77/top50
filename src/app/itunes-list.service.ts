import { Injectable } from '@angular/core';
import { Http, Jsonp, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx'

import 'rxjs/add/operator/map';
import {ItunesList} from './itunes-list';

@Injectable()
export class ItunesListService {
  urls: string[];

  constructor(private http: Http, private jsonp: Jsonp) {
    this.urls = [];
    this.urls.push('https://itunes.apple.com/us/rss/topaudiobooks/limit=50/json');
    this.urls.push('https://itunes.apple.com/us/rss/topalbums/limit=50/json');
    this.urls.push('https://itunes.apple.com/us/rss/toppodcasts/limit=50/json');
  }


  getFeed(): Observable<ItunesList[]> {
    // getFeed function that uses REST get request to grab a RSS feed
    //  -Arguments: NA
    //  - Returns: array of observable

    return Observable.forkJoin(
      this.http.get(this.urls[0]).map(this.extractFeed),
      this.http.get(this.urls[1]).map(this.extractFeed),
      this.http.get(this.urls[2]).map(this.extractFeed)
    );
  }

  private extractFeed(res: Response) {
    const body = res.json();
    return body.feed;
  }

  getTest() {
    return this.http.get('https://itunes.apple.com/us/rss/topaudiobooks/limit=50/json');
  }

}
