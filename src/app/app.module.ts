import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { AjaxClientService } from './shared/ajax/ajax-client.service';
import { ConnectComponent } from './connect/connect.component';
import { appRoutes } from './app.routes';
import { CreateClientComponent } from './create-client/create-client.component';
import { Client } from './model/Client';
import { Location } from './model/Location';
import { Article } from './model/Article';
import { Preparateur } from './model/Preparateur';
import { Token } from './model/Token';
import { Commande } from './model/Commande';
import { Categorie } from './model/Categorie';
import { Basket } from './model/Basket';

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
  providers: [
    DatePipe,
    AjaxClientService,
    Client,
    Location,
    Article,
    Preparateur,
    Token,
    Commande,
    Categorie,
    Basket
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
