import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { DashboardComponent } from './business/dashboard/dashboard.component';
import { LeftBarComponent } from './business/left-bar/left-bar.component';
import { TopBarComponent } from './business/top-bar/top-bar.component';
import { UserComponent } from './business/user/user.component';
import { CreateComponent } from './business/user/create/create.component';
import { UpdateComponent } from './business/user/update/update.component';
import { BusinessComponent } from './business/business.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    LeftBarComponent,
    TopBarComponent,
    UserComponent,
    CreateComponent,
    UpdateComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
