import { Component, OnInit } from '@angular/core';
import { AjaxClientService } from '../shared/ajax/ajax-client.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  name: string;
  password: string;

  constructor( private ajaxClient: AjaxClientService ) {}

  ngOnInit() {
  }

  click() {
    console.log(this.ajaxClient.clients());
  }

  post() {
    console.log(this.ajaxClient.post());
  }

  // inscr() {
  //   console.log(this.ajaxClient.sinscrire());
  // }

}
