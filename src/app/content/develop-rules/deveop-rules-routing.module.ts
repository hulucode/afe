import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DevelopRulesComponent } from './develop-rules/develop-rules.component';

const routes: Routes = [
  {
    path: '',
    component: DevelopRulesComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DeveopRulesRoutingModule { }
