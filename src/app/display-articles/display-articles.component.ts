import { Component, OnInit } from '@angular/core';

import { AjaxArticlesService } from '../shared/ajax/article/ajax-articles.service';
import { Article } from '../model/Article';
import { Route } from '@angular/router';

@Component({
  selector: 'app-display-articles',
  templateUrl: './display-articles.component.html',
  styleUrls: ['./display-articles.component.css']
})
export class DisplayArticlesComponent implements OnInit {

  articles: Article[] = [];
  article: Article;

  constructor( private ajaxArticle: AjaxArticlesService) { }

  ngOnInit() {
    // display articles
    this.ajaxArticle.displArticles().subscribe(articles => {
      console.log(articles);
      for (const article of articles) {
        this.articles.push(article);
      }
    });
  }

  describ(id) {
    console.log(id);
    this.ajaxArticle.getById(id).subscribe((article) => console.log(article));
    // this.route.
  }

  afficher(id) {
  }


}
