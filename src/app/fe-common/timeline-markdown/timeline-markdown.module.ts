import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { TimelineMarkdownComponent } from './timeline-markdown.component';
import { MarkdownModule } from '../markdown/markdown.module';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    MarkdownModule
  ],
  declarations: [TimelineMarkdownComponent],
  exports: [TimelineMarkdownComponent]
})
export class TimelineMarkdownModule { }
