import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPlanningRoutingModule } from './my-planning-routing.module';
import { PlanningListComponent } from './planning-list/planning-list.component';
import { PlanningDetailsComponent } from './planning-details/planning-details.component';
import { ReusableModule } from '../reusable/reusable.module';

@NgModule({
  declarations: [PlanningListComponent, PlanningDetailsComponent],
  imports: [
    CommonModule,
    MyPlanningRoutingModule,
    ReusableModule
  ],
  exports: [
    PlanningListComponent
  ]
})
export class MyPlanningModule { }
