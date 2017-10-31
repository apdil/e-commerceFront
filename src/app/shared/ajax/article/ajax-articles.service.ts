import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../../../model/Article';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { Token } from '../../../model/Token';

@Injectable()
export class AjaxArticlesService {

  constructor( private http: HttpClient,
              private token: Token ) { }

  displArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:8000/articles');
  }

  getById(id): Observable<Article> {
    const header = new HttpHeaders().set('X-Auth-Token', this.token.value);
    return this.http.get<Article>('http://localhost:8000/article/' + id, {headers: header});
  }
}
