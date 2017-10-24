import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleService } from './shared/article/article.service';
import { ClientService } from './shared/client/client.service';
import { PreparateurService } from './shared/preparateur/preparateur.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ArticleService,
              ClientService,
              PreparateurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
