import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopProcessComponent } from './develop-process/develop-process.component';
import { DevelopProcessRoutingModule } from './develop-process-routing.module';
import { StepsMarkdownModule } from '../../fe-common/steps-markdown/steps-markdown.module';

@NgModule({
  imports: [
    CommonModule,
    StepsMarkdownModule,
    DevelopProcessRoutingModule
  ],
  declarations: [DevelopProcessComponent]
})
export class DevelopProcessModule { }
