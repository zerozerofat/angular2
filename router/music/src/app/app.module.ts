import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  LocationStrategy,
  HashLocationStrategy,
  APP_BASE_HREF
} from '@angular/common';

import { AppComponent } from './app.component';
import { SearchComponent } from './component/search/search.component';

require('./css/styles.css');


import {SPOTIFY_PROVIDERS} from './services/SpotifyService';
import { TrackComponent } from './component/track/track.component';


const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'tracks/:id', component: TrackComponent },
/*  { path: 'artists/:id', component: ArtistComponent },

  { path: 'albums/:id', component: AlbumComponent },*/
];
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes) // <-- routes
  ],
  providers: [
    SPOTIFY_PROVIDERS,
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
