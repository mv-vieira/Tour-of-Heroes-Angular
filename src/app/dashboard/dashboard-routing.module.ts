import { AuthGuard } from './../auth/guards/auth.guard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  {path: '', component: DashboardComponent, canActivate:[AuthGuard]},
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],

  exports: [RouterModule]
})
export class DashboardRoutingModule { }
