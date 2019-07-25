import { Component, OnInit } from '@angular/core';

import { SONGS } from '../songs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  mysongs = SONGS;
  myname: string;
  artist: string;
  genre: string;
  YReleased: Number;
  picture: string;

  constructor() { }

  ngOnInit() {
  }

  onClickMe(index){
    this.myname = this.mysongs[index].sName;
    this.artist = this.mysongs[index].artist;
    this.genre = this.mysongs[index].genre;
    this.YReleased = this.mysongs[index].YReleased;
    this.picture = this.mysongs[index].picture;

  }

}
