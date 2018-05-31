import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { TeamMienComponent } from './team-mien/team-mien.component';
import { TeamMienRoutingModule } from './team-mien-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    TeamMienRoutingModule
  ],
  declarations: [TeamMienComponent],
  exports: [TeamMienComponent]
})
export class TeamMienModule { }
