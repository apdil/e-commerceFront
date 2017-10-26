import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { UserService } from '../user/user.service';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AjaxClientService {

  // tslint:disable-next-line:quotemark
  public client = {"name": "tartare", "password": "like"};

  constructor(private user: UserService, private http: HttpClient) { }

  connect() {
    const header = new HttpHeaders().set('X-Auth-Token', 'WzLp92Su74uzSXB42ifriIpLX9+K5h8l5EK9csc2LBgQ7K/NkWNBh9UJzW/CitMBZi8=');
    return this.http.get('http://localhost:8000/clients', { headers: header }).toPromise();
  }

  post() {
    return this.http.post('http://localhost:8000/auth-tokens', this.client).toPromise();
  }
}
