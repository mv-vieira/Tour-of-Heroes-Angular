import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
