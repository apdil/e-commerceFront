import { Routes } from '@angular/router';

import { ConnectComponent } from './connect/connect.component';
import { CreateClientComponent } from './create-client/create-client.component';

export const appRoutes: Routes = [
    {path: 'connect', component: ConnectComponent},
    {path: 'createClient', component: CreateClientComponent}
];
