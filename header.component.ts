import { Component, OnInit } from '@angular/core';
import {kaamanat} from  '../kaamanat';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  info: kaamanat = {
    sid: 991504210 , name: "Amanat Kaur", login:"kamanat",
    campus : "Davis" , assigTitle: "kamanatA3"

    
 }

  constructor() { }

  ngOnInit() {
  }

}
