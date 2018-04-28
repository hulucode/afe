import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DevelopProcessComponent } from './develop-process/develop-process.component';

const routes: Routes = [
  {
    path: '',
    component: DevelopProcessComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DevelopProcessRoutingModule { }
