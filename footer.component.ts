import { Component, OnInit } from '@angular/core';
import {kaamanat} from  '../kaamanat';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  info: kaamanat = {
    sid: 991504210 , name: "Amanat Kaur", login:"kaamanat",
    campus : "Davis" , assigTitle: "kaamanatA3"

    
 }
  constructor() { }

  ngOnInit() {
  }

}
