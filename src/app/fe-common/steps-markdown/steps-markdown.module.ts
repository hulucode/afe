import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { StepsMarkdownComponent } from './steps-markdown.component';
import { MarkdownModule } from '../markdown/markdown.module';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    MarkdownModule
  ],
  declarations: [StepsMarkdownComponent],
  exports: [StepsMarkdownComponent]
})
export class StepsMarkdownModule { }
