import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drummerlist',
  templateUrl: './drummerlist.component.html',
  styleUrls: ['./drummerlist.component.css']
})
export class DrummerlistComponent implements OnInit {

	drummers:string[] = new Array( "Woody Woodmansey", "Ringo Starr", "Alex Van Halen", "Chris Robyn", "Matt McCord" );

  constructor() { }

  ngOnInit() {
  }

}
