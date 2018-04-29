import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { MarkdownComponent } from './markdown.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule
  ],
  declarations: [MarkdownComponent],
  exports: [MarkdownComponent]
})
export class MarkdownModule { }
