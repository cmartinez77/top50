import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Itunes RSS Top 50 Feed';
  description = 'This application uses 3 RSS feeds from \'rss.itunes.apple.com/en-us\' and displays the feed results(List of 50)'
}
