import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { Client } from '../model/Client';
import { AjaxClientService } from '../shared/ajax/client/ajax-client.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  formulaire: FormGroup;

  constructor(private form: FormBuilder,
              private client: Client,
              private ajaxClient: AjaxClientService,
              private datePipe: DatePipe) { }

  ngOnInit() {
    this.formulaire = this.form.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      psw: ['', [Validators.required, Validators.minLength(5)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['@', [Validators.required, Validators.email]],
      birthdate: ['', [Validators.required]],
      sex: ['', [Validators.required]]
      });
  }

  createClient() {
    if (this.formulaire.valid) {
      this.client.name = this.formulaire.value.nom;
      this.client.plainPassword = this.formulaire.value.psw;
      this.client.lastname = this.formulaire.value.lastname;
      this.client.email = this.formulaire.value.email;
      this.client.sex = this.formulaire.value.sex;

      const t = new Date (this.formulaire.value.birthdate);
      this.client.birthdate = this.datePipe.transform(t, 'dd-MM-y');

      this.ajaxClient.sinscrire(this.client).subscribe((client) => {
         console.log(client);
      });
    }
  }
}
