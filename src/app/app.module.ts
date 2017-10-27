import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { ArticleService } from './shared/article/article.service';
import { ClientService } from './shared/client/client.service';
import { PreparateurService } from './shared/preparateur/preparateur.service';
import { LocationService } from './shared/location/location.service';
import { UserService } from './shared/user/user.service';
import { AjaxClientService } from './shared/ajax/ajax-client.service';
import { ConnectComponent } from './connect/connect.component';
import { appRoutes } from './app.routes';
import { CreateClientComponent } from './create-client/create-client.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectComponent,
    CreateClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ArticleService,
    ClientService,
    PreparateurService,
    LocationService,
    UserService,
    DatePipe,
    AjaxClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
