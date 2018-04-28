import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-markdown',
  templateUrl: './menu-markdown.component.html',
  styleUrls: ['./menu-markdown.component.less']
})
export class MenuMarkdownComponent implements OnInit {

  _path;
  _selectTitle;
  _menus: any[];

  @Input() set menus(menus: any[]) {
    if (menus && menus.length > 0) {
      this._selectTitle = menus[0].submenus[0].title;
      this._path = menus[0].submenus[0].data.url;
    }
    this._menus = menus;
  }

  constructor() {

  }

  ngOnInit() {

  }

  nzClick(event: any, selectMenu: any) {
    this._path = selectMenu.data.url;
  }
}
