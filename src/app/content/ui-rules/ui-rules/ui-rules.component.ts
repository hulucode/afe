import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpConfig } from '../../http.config';

@Component({
  selector: 'app-ui-rules',
  templateUrl: './ui-rules.component.html',
  styleUrls: ['./ui-rules.component.less']
})
export class UIRulesComponent implements OnInit {

  _menus: any[];

  constructor(private http: HttpClient) {
    this.http.get(`${HttpConfig.uiRulesUrl}/index.json`).toPromise().then(data => {
      const menus = data as any[];
      for (let i = 0; i < menus.length; i++) {
        for (let j = 0; j < menus[i].submenus.length; j++) {
          menus[i].submenus[j].data.url = `${HttpConfig.developRulesUrl}/${menus[i].submenus[j].data.url}`;
        }
      }
      this._menus = menus;
    });
  }

  ngOnInit() {

  }

}
