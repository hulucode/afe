```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-develop-rules',
  templateUrl: './develop-rules.component.html',
  styleUrls: ['./develop-rules.component.less']
})
export class DevelopRulesComponent implements OnInit {

  menus: any[] = [
    {
      icon: "anticon anticon-file-text",
      title: "什么是规范？",
      isOpen: true,
      submenus: [
        {
          title: "二级菜单1",
          data: {
            url: "./assets/data/test.md"
          }
        }
      ]
    },
    {
      icon: "anticon anticon-file-text",
      title: "为什么规范？",
      isOpen: true,
      submenus: [
        {
          title: "二级菜单2",
          data: {
            url: "./assets/data/test.1.md"
          }
        }
      ]
    }
  ];

  selectTitle = '';

  path = '';

  constructor() {
    this.selectTitle = this.menus[0].submenus[0].title;
    this.path = this.menus[0].submenus[0].data.url;
  }

  ngOnInit() {

  }

  menuSelect(data: any) {
    this.path = data.url;
  }

}

```