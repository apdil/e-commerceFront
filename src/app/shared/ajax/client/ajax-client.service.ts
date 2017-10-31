import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Client } from '../../../model/Client';
import { Token } from '../../../model/Token';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


@Injectable()
export class AjaxClientService {

  constructor(private http: HttpClient,
              private client: Client,
              private token: Token) { }


  sinscrire(client: Client): Observable<Client> {
    return this.http.post<Client>('http://localhost:8000/client', client);
  }

  connection(login, mdp): Observable<Client> {
    return this.http.post<any>('http://localhost:8000/auth-tokens',
     {"name": login, "password": mdp})
    .do(reponse => {
      // add token proprietes in Token model
      // tslint:disable-next-line:forin
      for (const responseProp in reponse) {
        switch (responseProp) {
          case 'id': this.token.id = reponse[responseProp]; break;
          case 'value': this.token.value = reponse[responseProp]; break;
          case 'createdAt': this.token.date = reponse[responseProp]; break;
        }
      }
    })
    .map(reponse => reponse.client);
  }
}
