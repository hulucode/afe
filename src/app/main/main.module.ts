import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FooterModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    MainComponent
  ]
})
export class MainModule { }
