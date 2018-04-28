import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-develop-process',
  templateUrl: './develop-process.component.html',
  styleUrls: ['./develop-process.component.less']
})
export class DevelopProcessComponent implements OnInit {

  _steps: any[] = [
    {
      title: '第一步',
      data: {
        url: './assets/data/develop-rules/1.md'
      }
    },
    {
      title: '第二步',
      data: {
        url: './assets/data/develop-rules/2.md'
      }
    },
    {
      title: '第三步',
      data: {
        url: './assets/data/develop-rules/1.md'
      }
    }
  ];

  constructor() {

  }

  ngOnInit() {

  }

}
