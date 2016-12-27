import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import 'hammerjs';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';

import { LandingService } from './landing/landing.service';
import { NavbarComponent } from './navbar/navbar.component'

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', component: LandingComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot()
  ],
  providers: [
    LandingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
