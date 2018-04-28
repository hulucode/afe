import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { MenuMarkdownComponent } from './menu-markdown.component';
import { MarkdownModule } from '../markdown/markdown.module';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    MarkdownModule
  ],
  declarations: [MenuMarkdownComponent],
  exports: [MenuMarkdownComponent]
})
export class MenuMarkdownModule { }
