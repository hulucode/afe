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

  action = '开始';

  _members: any[];

  constructor(private http: HttpClient, private router: Router) {
    this.personImgShow = true;
    this.personImg = `${HttpConfig.teamMienUrl}/images/none.jpeg`;
  }

  ngOnInit() {
    const el = this.main.nativeElement as HTMLElement;
    el.style.height = (document.documentElement.clientHeight - 188) + 'px';

    window.addEventListener('resize', () => {
      const el = this.main.nativeElement as HTMLElement;
      el.style.height = (document.documentElement.clientHeight - 188) + 'px';
    });

    this.initSwiper();
  }

  initSwiper() {

    this.http.get(`${HttpConfig.teamMienUrl}/index.json`).toPromise().then(data => {
      const _members = data as any[];
      _members.sort(()=>{
        return 0.5 - Math.random();
      });
      for (let i = 0; i < _members.length; i++) {
        _members[i].img = `${HttpConfig.teamMienUrl}/${_members[i].img}`;
      }
      this._members = _members;
      setTimeout(() => {
        // 开始循环
        this.swiper = new window['Swiper']('.swiper-container', {
          zoom: true,
          loop: true
        });
      }, 300);

    });

  }

  actionDo() {
    this.personImgShow = false;
    if (this.action === '开始') {
      this.action = '停止';
      this.intervalHandle = setInterval(() => {
        this.swiper.slideNext(50);
      }, 100);
    } else {
      clearInterval(this.intervalHandle);
      this.action = '开始';
    }
  }

}
