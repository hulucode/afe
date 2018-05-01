import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WeeklyFeComponent } from './weekly-fe/weekly-fe.component';

const routes: Routes = [
  {
    path: '',
    component: WeeklyFeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class WeeklyFeRoutingModule { }
