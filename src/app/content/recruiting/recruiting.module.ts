import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruitingComponent } from './recruiting/recruiting.component';
import { RecruitingRoutingModule } from './recruiting-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FooterModule } from '../../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FooterModule,
    RecruitingRoutingModule
  ],
  declarations: [RecruitingComponent]
})
export class RecruitingModule { }
