import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ClientService } from '../shared/client/client.service';
import { AjaxClientService } from '../shared/ajax/ajax-client.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  formulaire: FormGroup;

  constructor(private form: FormBuilder, private client: ClientService,
              private ajaxClient: AjaxClientService,
              private datePipe: DatePipe) { }

  ngOnInit() {
    this.formulaire = this.form.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      psw: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      birthdate: ['', [Validators.required]],
      sex: ['', [Validators.required]]
      });
  }

  aa() {
    if (this.formulaire.valid) {
      this.client.setName(this.formulaire.value.nom);
      this.client.setPlainPassword(this.formulaire.value.psw);
      this.client.setLastname(this.formulaire.value.lastname);
      const t = new Date(this.formulaire.value.birthdate);
      this.client.setBirthdate(this.datePipe.transform(t, 'dd-MM-y'));
      this.client.setEmail(this.formulaire.value.email);
      this.client.setSex(this.formulaire.value.sex);

      console.log(this.ajaxClient.sinscrire(this.client));
    }
  }

}
