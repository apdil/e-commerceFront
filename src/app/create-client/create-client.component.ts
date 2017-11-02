import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AjaxClientService } from '../shared/ajax/client/ajax-client.service';
import { Inscription } from '../model/Inscription';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  formulaire: FormGroup;

  constructor(private form: FormBuilder,
              private inscription: Inscription,
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
      this.inscription.name = this.formulaire.value.nom;
      this.inscription.plainPassword = this.formulaire.value.psw;
      this.inscription.lastname = this.formulaire.value.lastname;
      this.inscription.email = this.formulaire.value.email;
      this.inscription.sex = this.formulaire.value.sex;

      const t = new Date (this.formulaire.value.birthdate);
      this.inscription.birthdate = this.datePipe.transform(t, 'dd-MM-y');

      console.log(this.inscription);
      this.ajaxClient.sinscrire(this.inscription).subscribe((client) => {
         console.log(client);
      });
    }
  }
}
