import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DailyAffairsComponent } from './daily-affairs/daily-affairs.component';

const routes: Routes = [
  {
    path: '',
    component: DailyAffairsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DailyAffairsRoutingModule { }
