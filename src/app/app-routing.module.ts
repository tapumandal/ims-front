import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { BusinessComponent } from './business/business.component';
import { DashboardComponent } from './business/dashboard/dashboard.component';
import { UserComponent } from './business/user/user.component';
const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {
    path: "", component: BusinessComponent,
    children: [
      {path: "dashboard", component: DashboardComponent},
      {path: "users", component: UserComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
