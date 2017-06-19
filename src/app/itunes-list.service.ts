import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx'

import 'rxjs/add/operator/map';

@Injectable()
export class ItunesListService {


  constructor(private http: Http, private jsonp: Jsonp) { } /*Using Jsonp since Http does not handle cross-domain requests */ 


  getList( urls: string [])
  {    
    //Function that sends a get request to a json data
    // ***DOES NOT WORK ON ??FILES THAT HAVE STRICT MIME TYPE??
    /*  CHROME ERROR:
          Refused to execute script from 'https://rss.itunes.apple.com/api/v1/us/music-videos/top-music-videos/10/explicit/json?callback=__ng_jsonp__.__req0.finished' 
          because its MIME type ('application/json') is not executable, and strict MIME type checking is enabled.
    */
    // -Returns an observable
    
    // return this.http.get(url).map(
    //   (res) => res.json()
    // ); 

    return Observable.forkJoin(
      this.http.get(urls[0]).map((res) => res.json()),
      this.http.get(urls[1]).map((res) => res.json()),
      this.http.get(urls[2]).map((res) => res.json())
    );
    
  }

}
