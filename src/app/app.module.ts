import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ArticleService } from './shared/article/article.service';
import { ClientService } from './shared/client/client.service';
import { PreparateurService } from './shared/preparateur/preparateur.service';
import { LocationService } from './shared/location/location.service';
import { UserService } from './shared/user/user.service';
import { AjaxClientService } from './shared/ajax/ajax-client.service';
import { ConnectComponent } from './connect/connect.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ConnectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ArticleService,
              ClientService,
              PreparateurService,
              LocationService,
              UserService,
              AjaxClientService
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
