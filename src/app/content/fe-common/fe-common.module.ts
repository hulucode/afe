import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { FeCommonComponent } from './fe-common/fe-common.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  declarations: [FeCommonComponent],
  exports: [FeCommonComponent]
})
export class FeCommonModule { }
