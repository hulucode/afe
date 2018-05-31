import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuckComponent } from './luck/luck.component';
import { LuckRoutingModule } from './luck-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    LuckRoutingModule
  ],
  declarations: [LuckComponent]
})
export class LuckModule { }
