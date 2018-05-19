import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuMarkdownModule } from '../../fe-common/menu-markdown/menu-markdown.module';
import { UIRulesRoutingModule } from './ui-rules-routing.module';
import { UIRulesComponent } from './ui-rules/ui-rules.component';

@NgModule({
  imports: [
    CommonModule,
    MenuMarkdownModule,
    UIRulesRoutingModule
  ],
  declarations: [UIRulesComponent]
})
export class UIRulesModule { }
