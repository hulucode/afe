import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeamMienComponent } from './team-mien/team-mien.component';
const routes: Routes = [
  {
    path: '',
    component: TeamMienComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TeamMienRoutingModule { }
