import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singerlist',
  templateUrl: './singerlist.component.html',
  styleUrls: ['./singerlist.component.css']
})
export class SingerlistComponent implements OnInit {


	singers:string[] = new Array( "David Bowie", "Robert Plant", "John Lennon" );

  constructor() 
  {

  }

  ngOnInit() {
  }

}
