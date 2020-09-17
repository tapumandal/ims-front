import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessComponent } from './business.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: "", component: BusinessComponent,
    children: [
      {path: "dashboard", component: DashboardComponent},
      {path: "users", component: UserComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
