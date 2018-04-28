import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-markdown',
  templateUrl: './menu-markdown.component.html',
  styleUrls: ['./menu-markdown.component.less']
})
export class MenuMarkdownComponent implements OnInit {

  _selectIndex;

  _path;

  _menus: any[];

  @Input() set menus(menus: any[]) {
    if (menus && menus.length > 0) {
      this._selectIndex = '00';
      this._path = menus[0].submenus[0].data.url;
    }
    this._menus = menus;
  }

  constructor() {

  }

  ngOnInit() {

  }

  nzClick(menu: any, index: string) {
    this._selectIndex = index;
    this._path = menu.data.url;
  }
}
