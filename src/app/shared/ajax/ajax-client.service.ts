import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { UserService } from '../user/user.service';
import { ClientService } from '../client/client.service';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AjaxClientService {

  public client: ClientService;

  constructor(private user: UserService, private http: HttpClient) { }

  clients() {
  //   const header = new HttpHeaders().set('X-Auth-Token', this.client.getToken());
  //   return this.http.get('http://localhost:8000/clients', { headers: header }).toPromise();
  }

  sinscrire(client: ClientService) {
    return this.http.post('http://localhost:8000/client', client)
    .subscribe((content) => { console.log(content); });
  }

  post() {
    return this.http.post('http://localhost:8000/auth-tokens', this.client)
    .subscribe((content) => { console.log(content); });
  }
}
