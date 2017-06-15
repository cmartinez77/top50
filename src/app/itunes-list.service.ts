import { Injectable } from '@angular/core';
import { Headers, Jsonp } from '@angular/http';

@Injectable()
export class ItunesListService {

  url: string;

  constructor( private jsonp: Jsonp) { } /*Using Jsonp since Http does not handle cross-domain requests */ 


  getList()
  {    
    //Function that sends a get request to a json data
    // ***DOES NOT WORK ON ??FILES THAT HAVE STRICT MIME TYPE??
    /*  CHROME ERROR:
        Refused to execute script from 'https://rss.itunes.apple.com/api/v1/us/music-videos/top-music-videos/10/explicit/json?callback=__ng_jsonp__.__req0.finished' 
        because its MIME type ('application/json') is not executable, and strict MIME type checking is enabled.
    */
    // -Returns an observable

    this.url = 'https://rss.itunes.apple.com/api/v1/us/music-videos/top-music-videos/10/explicit/json?callback=JSONP_CALLBACK';
    // this.url = 'http://ip.jsontest.com/?callback=JSONP_CALLBACK';
    
    return this.jsonp.get(this.url); 
  }

}
