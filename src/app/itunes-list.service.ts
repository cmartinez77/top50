import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp, RequestOptions } from '@angular/http';


import 'rxjs/add/operator/map';

@Injectable()
export class ItunesListService {


  constructor(private http: Http, private jsonp: Jsonp) { } /*Using Jsonp since Http does not handle cross-domain requests */ 


  getList( url: string)
  {    
    //Function that sends a get request to a json data
    // ***DOES NOT WORK ON ??FILES THAT HAVE STRICT MIME TYPE??
    /*  CHROME ERROR:
          Refused to execute script from 'https://rss.itunes.apple.com/api/v1/us/music-videos/top-music-videos/10/explicit/json?callback=__ng_jsonp__.__req0.finished' 
          because its MIME type ('application/json') is not executable, and strict MIME type checking is enabled.
    */
    // -Returns an observable


    // this.url = 'https://rss.itunes.apple.com/api/v1/us/music-videos/top-music-videos/10/explicit/json';
    // this.url = 'https://itunes.apple.com/search?term=love&media=music&limit=20&callback=JSONP_CALLBACK';
    // this.url = 'http://ip.jsontest.com/?callback=JSONP_CALLBACK';
    // array: Observable[]
    
    return this.http.get(url).map(
      (res) => res.json()
    ); 
    
  }

}
