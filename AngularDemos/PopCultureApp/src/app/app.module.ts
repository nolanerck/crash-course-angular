import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GuitaristlistComponent } from './guitaristlist/guitaristlist.component';
import { DrummerlistComponent } from './drummerlist/drummerlist.component';
import { SingerlistComponent } from './singerlist/singerlist.component';
import { KeyboardlistComponent } from './keyboardlist/keyboardlist.component';
import { TrumpetplayersComponent } from './trumpetplayers/trumpetplayers.component';
import { KazooplayersComponent } from './kazooplayers/kazooplayers.component';


@NgModule({
  declarations: [
    AppComponent,
    GuitaristlistComponent,
    DrummerlistComponent,
    SingerlistComponent,
    KeyboardlistComponent,
    TrumpetplayersComponent,
    KazooplayersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
