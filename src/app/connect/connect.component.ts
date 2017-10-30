import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { AjaxClientService } from '../shared/ajax/ajax-client.service';

import 'rxjs/add/operator/map';
import { Client } from '../model/Client';
import { Location } from '../model/Location';
import { Token } from '../model/Token';
import { Basket } from '../model/Basket';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  formulaire: FormGroup;

  constructor(private ajaxClient: AjaxClientService,
              private fb: FormBuilder,
              private client: Client) {}

  ngOnInit() {
    this.formulaire = this.fb.group({
      name: '',
      psw: ''
    });
  }

  connect() {
    const name = this.formulaire.value.name;
    const psw = this.formulaire.value.psw;
    this.ajaxClient.connection(name, psw).subscribe(client => {

      console.log(client);

      this.client.id = client.id;
      this.client.name = client.name;
      this.client.lastname = client.lastname;
      this.client.email = client.email;
      this.client.birthdate = client.birthdate;
      this.client.sex = client.sex;
      this.client.locations = client.locations;
      this.client.commandes = client.commandes;
      this.client.basket_parent = client.basket_parent;

      console.log(this.client);
    });
  }
}
