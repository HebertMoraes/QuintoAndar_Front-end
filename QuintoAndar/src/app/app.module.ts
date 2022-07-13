import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Content1Component } from './home/content1/content1.component';
import { Content5Component } from './home/content5/content5.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './home/header/header.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { CardResidenceComponent } from './residence-components/card-residence/card-residence.component';
import { ResidencePageComponent } from './residence-components/residence-page/residence-page.component';
import { FooterDefaultComponent } from './footer-default/footer-default.component';
import { Content7Component } from './content7/content7.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    Content1Component,
    Content5Component,
    HeaderComponent,
    UserAccountComponent,
    CardResidenceComponent,
    ResidencePageComponent,
    FooterDefaultComponent,
    Content7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CommonModule, 
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
