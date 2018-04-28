import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LearningSharingComponent } from './learning-sharing/learning-sharing.component';

const routes: Routes = [
  {
    path: '',
    component: LearningSharingComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LearningSharingRoutingModule { }
