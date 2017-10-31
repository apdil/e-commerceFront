import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../model/Article';
import { AjaxArticlesService } from '../shared/ajax/article/ajax-articles.service';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-fiche-article',
  templateUrl: './fiche-article.component.html',
  styleUrls: ['./fiche-article.component.css']
})
export class FicheArticleComponent implements OnInit {

  article: Article;

  constructor( private route: ActivatedRoute,
               private ajaxArticle: AjaxArticlesService) { }

  ngOnInit() {
    this.route.params
    // .filter((params) => parseInt(params.id) > 0)
    .mergeMap((params) => this.ajaxArticle.getById(params.id))
    .subscribe((article) => {
      console.log(article);
      this.article = article;
    });
  }
}
