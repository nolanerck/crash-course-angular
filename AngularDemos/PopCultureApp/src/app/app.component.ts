import { Component } from '@angular/core';
import { GuitaristlistComponent } from './guitaristlist/guitaristlist.component';
import { DrummerlistComponent } from './drummerlist/drummerlist.component';
import { SingerlistComponent } from './singerlist/singerlist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pop Culture App 1.0';
}
