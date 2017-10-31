import { Routes } from '@angular/router';

import { ConnectComponent } from './connect/connect.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { DisplayArticlesComponent } from './display-articles/display-articles.component';
import { FicheArticleComponent } from './fiche-article/fiche-article.component';

export const appRoutes: Routes = [
    {path: 'connect', component: ConnectComponent},
    {path: 'createClient', component: CreateClientComponent},
    {path: 'articles', component: DisplayArticlesComponent},
    {path: 'article/:id', component: FicheArticleComponent}
];
