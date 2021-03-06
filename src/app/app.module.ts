import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItunesListService } from './shared/itunes-list.service'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule, // Used to get cross-domain request
    NgbModule.forRoot(),
  ],
  providers: [ItunesListService], // Gives access to ItunesListService to all of the app
  bootstrap: [AppComponent]
})
export class AppModule { }
