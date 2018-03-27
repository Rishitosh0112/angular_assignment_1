import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './Routing-Module/routing.module';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {environment} from '../environments/environment';
// custom modules import
import { LoginModule } from './login-module/login.module';
import { DashboardModule } from './dashboard-module/dashboard.module';
import { AuthGuardService } from './auth-guard.service';

// components
import { HeaderComponent } from './components/header-component/header.component';
// services

import { Service } from './service';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
const angularConfig = {
  apiKey: 'AIzaSyAPY4pCo614nbg6r4f3_gpLhu7wP4d9b7U',
  authDomain: 'angularapp-7099c.firebaseapp.com',
  databaseURL: 'https://angularapp-7099c.firebaseio.com',
  projectId: 'angularapp-7099c',
  storageBucket: 'angularapp-7099c.appspot.com',
  messagingSenderId: '420413089219'
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoPageFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    LoginModule,
    DashboardModule,
    AngularFireModule.initializeApp(angularConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [AuthGuardService, Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
