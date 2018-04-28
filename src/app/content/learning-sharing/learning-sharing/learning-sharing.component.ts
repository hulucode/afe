import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning-sharing',
  templateUrl: './learning-sharing.component.html',
  styleUrls: ['./learning-sharing.component.less']
})
export class LearningSharingComponent implements OnInit {

  timelines: any[] = [
    {
      title: '学习计划1',
      time: '2018-10-10',
      author: 'kevin',
      status: 'done',
      data: {
        url: './assets/data/develop-rules/1.md'
      }
    },
    {
      title: '学习计划2',
      time: '2018-10-20',
      author: 'kevin',
      data: {
        url: './assets/data/develop-rules/2.md'
      }
    },
    {
      title: '学习计划3',
      time: '2018-10-20',
      author: 'kevin',
      data: {
        url: './assets/data/develop-rules/2.md'
      }
    },
    {
      title: '学习计划4',
      time: '2018-10-20',
      author: 'kevin',
      status: 'undone',
      data: {
        url: './assets/data/develop-rules/2.md'
      }
    },
    {
      title: '学习计划5',
      time: '2018-10-20',
      author: 'kevin',
      status: 'done',
      data: {
        url: './assets/data/develop-rules/2.md'
      }
    }
  ];

  constructor() {

  }

  ngOnInit() {

  }

}
