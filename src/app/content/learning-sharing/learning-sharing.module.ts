import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningSharingComponent } from './learning-sharing/learning-sharing.component';
import { LearningSharingRoutingModule } from './learning-sharing-routing.module';
import { TimelineMarkdownModule } from '../../fe-common/timeline-markdown/timeline-markdown.module';

@NgModule({
  imports: [
    CommonModule,
    TimelineMarkdownModule,
    LearningSharingRoutingModule
  ],
  declarations: [LearningSharingComponent]
})
export class LearningSharingModule { }
