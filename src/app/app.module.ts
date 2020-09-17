import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthModule } from "./auth/auth.module";
import { BusinessModule } from "./business/business.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BusinessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
