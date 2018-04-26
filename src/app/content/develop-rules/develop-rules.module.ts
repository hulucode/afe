import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopRulesComponent } from './develop-rules/develop-rules.component';
import { DeveopRulesRoutingModule } from './deveop-rules-routing/deveop-rules-routing.module';
import { FeCommonModule } from '../fe-common/fe-common.module';

@NgModule({
  imports: [
    CommonModule,
    FeCommonModule,
    DeveopRulesRoutingModule
  ],
  declarations: [DevelopRulesComponent]
})
export class DevelopRulesModule { }
