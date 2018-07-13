import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing-module';

import { AppComponent } from './app.component';
import { GuitaristlistComponent } from './guitaristlist/guitaristlist.component';
import { DrummerlistComponent } from './drummerlist/drummerlist.component';
import { SingerlistComponent } from './singerlist/singerlist.component';


@NgModule({
  declarations: [
    AppComponent,
    GuitaristlistComponent,
    DrummerlistComponent,
    SingerlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
