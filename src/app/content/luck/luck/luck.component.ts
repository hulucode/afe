import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpConfig } from '../../http.config';

@Component({
  selector: 'app-luck',
  templateUrl: './luck.component.html',
  styleUrls: ['./luck.component.less']
})
export class LuckComponent implements OnInit {

  @ViewChild('main') main: ElementRef;
  @ViewChild('info') info: ElementRef;

  swiper: any;

  intervalHandle: any;

  personImg: string;

  personImgShow: boolean;

  actionWeekly = '周刊';
  actionShared = '分享';

  infoData: any;

  _members: any[];

  constructor(private http: HttpClient, private router: Router) {
    this.personImgShow = true;
    this.personImg = `${HttpConfig.teamMienUrl}/images/none.jpeg`;
  }

  ngOnInit() {
    const el = this.main.nativeElement as HTMLElement;
    el.style.height = (document.documentElement.clientHeight - 188) + 'px';

    window.addEventListener('resize', () => {
      el.style.height = (document.documentElement.clientHeight - 188) + 'px';
    });

    this.initSwiper();
  }

  initSwiper() {
    this.http.get(`${HttpConfig.teamMienUrl}/index.json`).toPromise().then(data => {
      this.infoData = data;
    });
  }

  actionWeeklyDo() {
    if (this.actionWeekly === '周刊') {
      this.createSwiper('周刊');
      this.actionWeekly = '停止';
    } else {
      clearInterval(this.intervalHandle);
      this.actionWeekly = '周刊';
    }
  }

  actionSharedDo() {
    if (this.actionShared === '分享') {
      this.createSwiper('分享');
      this.actionShared = '停止';
    } else {
      clearInterval(this.intervalHandle);
      this.actionShared = '分享';
    }
  }

  createSwiper(action: string) {
    this._members = [];
    const _weekly = this.infoData['weekly'] as number;
    const _shared = this.infoData['shared'] as number;
    const _members = this.infoData['members'] as any[];
    _members.sort(() => {
      return 0.5 - Math.random();
    });
    for (let i = 0; i < _members.length; i++) {
      _members[i].img = `${HttpConfig.teamMienUrl}/${_members[i].img}`;
      if (_members[i].state === '1') {
        if (action === '周刊') {
          if (_members[i].weekly < _weekly) {
            this._members.push(_members[i]);
          }
        } else if (action === '分享') {
          if (_members[i].shared < _shared) {
            this._members.push(_members[i]);
          }
        }
      }
    }

    if (this.swiper) {
      this.swiper.destroy();
    }
    setTimeout(() => {
      // 开始循环
      this.swiper = new window['Swiper']('.swiper-container', {
        zoom: true,
        loop: true
      });
      this.personImgShow = false;
      this.intervalHandle = setInterval(() => {
        this.swiper.slideNext(50);
      }, 100);
    }, 300);
  }
}
