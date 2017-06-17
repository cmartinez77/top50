import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItunesListService } from './itunes-list.service'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, //Using Jsonp instead
    JsonpModule //Used to get cross-domain request
  ],
  providers: [ItunesListService], // Gives access to ItunesListService to all of the app
  bootstrap: [AppComponent]
})
export class AppModule { }
