import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpConfig } from '../../http.config';

@Component({
  selector: 'app-team-mien',
  templateUrl: './team-mien.component.html',
  styleUrls: ['./team-mien.component.less']
})
export class TeamMienComponent implements OnInit {

  _members: any[];

  items: any[];

  // 定义每一列之间的间隙 为10像素
  gap = 15;

  constructor(private http: HttpClient, private router: Router, private ref: ElementRef) {

  }

  ngOnInit() {
    this.http.get(`${HttpConfig.teamMienUrl}/index.json`).toPromise().then(data => {
      const _members = data as any[];
      for (let i = 0; i < _members.length; i++) {
        _members[i].img = `${HttpConfig.teamMienUrl}/${_members[i].img}`;
      }
      this._members = _members;

      setTimeout(() => {
        this.items = Array.prototype.slice.call(this.ref.nativeElement.querySelectorAll('.content'));
        this.waterFall();
      }, 300);

    });

    window.addEventListener('resize', () => {
      this.waterFall();
    })
  }

  teamBuilding() {
    this.router.navigateByUrl('/team-building');
  }

  // 封装成一个函数
  waterFall() {
    // 1- 确定列数  = 页面的宽度 / 图片的宽度
    let pageWidth = this.getClient().width;
    let itemWidth = (pageWidth - this.gap * 6) / 5;
    let columns = 5;
    let arr = [];
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].style.width = itemWidth + 'px';
      if (i < columns) {
        // 2- 确定第一行
        this.items[i].style.top = 0;
        this.items[i].style.left = (this.gap + (itemWidth + this.gap) * i) + 'px';
        arr.push(this.items[i].offsetHeight);
      } else {
        // 其他行
        // 3- 找到数组中最小高度  和 它的索引
        let minHeight = arr[0];
        let index = 0;
        for (let j = 0; j < arr.length; j++) {
          if (minHeight > arr[j]) {
            minHeight = arr[j];
            index = j;
          }
        }
        // 4- 设置下一行的第一个盒子位置
        // top值就是最小列的高度 + gap
        this.items[i].style.top = arr[index] + this.gap + 'px';
        // left值就是最小列距离左边的距离
        this.items[i].style.left = this.items[index].offsetLeft + 'px';

        // 5- 修改最小列的高度 
        // 最小列的高度 = 当前自己的高度 + 拼接过来的高度 + 间隙的高度
        arr[index] = arr[index] + this.items[i].offsetHeight + this.gap;
      }
    }
    // 设置低级的高度
    this.ref.nativeElement.querySelector('main').style.height = (this.maxYelement().maxHeight + 80) + 'px';
  }

  // 获取maxY最大的元素
  maxYelement() {
    let items = this.items.sort((a: any, b: any) => {
      let a_top = Number(a.style.top.replace('px', ''));
      let a_height = Number(a.style.height.replace('px', ''));
      let b_top = Number(b.style.top.replace('px', ''));
      let b_height = Number(b.style.height.replace('px', ''));
      if ((a_top + a_height) > (b_top + b_height)) {
        return -1;
      }
      return 1;
    });
    let top = items[0].offsetTop;
    let height = items[0].offsetHeight;
    return {
      maxHeight: top + height
    };
  }

  // clientWidth 处理兼容性
  getClient() {
    return {
      width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
  }

  // scrollTop兼容性处理
  getScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

}
