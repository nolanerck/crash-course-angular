import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guitaristlist',
  templateUrl: './guitaristlist.component.html',
  styleUrls: ['./guitaristlist.component.css']
})
export class GuitaristlistComponent implements OnInit {

 	guitarists:string[] = new Array( "Earl Slick", "Mick Ronson", "Page Hamilton", "Reeves Gabrels" );

	constructor() { }

	ngOnInit() {
	}

}
