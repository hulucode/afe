import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopRulesComponent } from './develop-rules/develop-rules.component';
import { DeveopRulesRoutingModule } from './deveop-rules-routing.module';
import { MenuMarkdownModule } from '../../fe-common/menu-markdown/menu-markdown.module';

@NgModule({
  imports: [
    CommonModule,
    MenuMarkdownModule,
    DeveopRulesRoutingModule
  ],
  declarations: [DevelopRulesComponent]
})
export class DevelopRulesModule { }
