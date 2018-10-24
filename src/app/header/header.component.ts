import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterEvent, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  tabs = [
    {
      name: '编码规范',
      icon: 'anticon anticon-file-text',
      routerLink: '/develop-rules'
    },
    {
      name: '开发流程',
      icon: 'anticon anticon-rocket',
      routerLink: '/develop-process'
    },
    // {
    //   name: '日常事务',
    //   icon: 'anticon anticon-appstore-o',
    //   routerLink: '/daily-affairs'
    // },
    {
      name: '前端周刊',
      icon: 'anticon anticon-profile',
      routerLink: '/weekly-fe'
    },
    {
      name: '我们团队',
      icon: 'anticon anticon-team',
      routerLink: '/team-mien'
    }
    // ,
    // {
    //   name: '幸运儿',
    //   icon: 'anticon anticon-smile-o',
    //   routerLink: '/luck'
    // }
  ];

  nzSelectedIndex = 0;

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        for (let i = 0; i < this.tabs.length; i++) {
          if (this.tabs[i].routerLink === event.url) {
            this.nzSelectedIndex = i;
            return;
          }
        }
      }
    });
  }

  ngOnInit() {

  }

  nzSelectChange(data: any) {
    const routerLink = this.tabs[data.index].routerLink;
    this.router.navigateByUrl(routerLink);
  }

  joinUs() {
    this.router.navigateByUrl('/recruiting');
  }

  openSite(url) {
    window.open(url, '_blank');
  }

}
