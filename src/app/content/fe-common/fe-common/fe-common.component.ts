import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fe-common',
  templateUrl: './fe-common.component.html',
  styleUrls: ['./fe-common.component.less']
})
export class FeCommonComponent implements OnInit {

  openMap = {
    sub1: true,
    sub2: false,
    sub3: false
  };

  constructor() { }

  ngOnInit() {

  }

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }

}
