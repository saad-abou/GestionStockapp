import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import {ClientsService} from './services/clients.service';
import { EntrepriseComponent } from './clients-list/entreprise/entreprise.component';
import { ParticulierComponent } from './clients-list/particulier/particulier.component';
import { NewClientComponent } from './clients-list/particulier/new-client/new-client.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { NewEntrepriseComponent } from './clients-list/entreprise/new-entreprise/new-entreprise.component';
import { EntrepriseDetailsComponent } from './clients-list/entreprise/entreprise-details/entreprise-details.component';
import { HeaderComponent } from './header/header.component';
import { ClientDetailsComponent } from './clients-list/particulier/client-details/client-details.component';


const appRoutes: Routes = [
  {path: 'clients/entreprise' , component: EntrepriseComponent},
  {path: 'clients/entreprise/new', component: NewEntrepriseComponent },
  {path: 'clients/entreprise/:id', component: EntrepriseDetailsComponent },
  {path: 'clients/particulier', component: ParticulierComponent},
  {path: 'clients/particulier/:id', component: ClientDetailsComponent },
  {path: 'clients/particulier/new', component: NewClientComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ClientsListComponent,
    EntrepriseComponent,
    NewClientComponent,
    ParticulierComponent,
    NewEntrepriseComponent,
    EntrepriseDetailsComponent,
    HeaderComponent,
    ClientDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ClientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
