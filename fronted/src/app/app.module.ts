import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { TypeaheadHttpComponent } from './typeahead-http/typeahead-http.component';
import { TvComponent } from './tv/tv.component';
import { MymovieComponent } from './mymovie/mymovie.component';
import { HomeotherpartsComponent } from './homeotherparts/homeotherparts.component';
import { SearchComponent } from './search/search.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    TypeaheadHttpComponent,
    TvComponent,
    MymovieComponent,
    HomeotherpartsComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgxImageZoomModule,
    CommonModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
