import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeeklyFeComponent } from './weekly-fe/weekly-fe.component';
import { WeeklyFeRoutingModule } from './weekly-fe-routing.module';
import { TimelineMarkdownModule } from '../../fe-common/timeline-markdown/timeline-markdown.module';

@NgModule({
  imports: [
    CommonModule,
    TimelineMarkdownModule,
    WeeklyFeRoutingModule
  ],
  declarations: [WeeklyFeComponent]
})
export class WeeklyFeModule { }
