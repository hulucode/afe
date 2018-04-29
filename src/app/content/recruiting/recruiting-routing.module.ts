import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecruitingComponent } from './recruiting/recruiting.component';

const routes: Routes = [
  {
    path: '',
    component: RecruitingComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RecruitingRoutingModule { }
