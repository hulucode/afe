import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpConfig } from '../../http.config';

@Component({
  selector: 'app-daily-affairs',
  templateUrl: './daily-affairs.component.html',
  styleUrls: ['./daily-affairs.component.less']
})
export class DailyAffairsComponent implements OnInit {

  _menus: any[];

  constructor(private http: HttpClient) {
    this.http.get(`${HttpConfig.dailyAffairsUrl}/index.json`).toPromise().then(data => {
      const menus = data as any[];
      for (let i = 0; i < menus.length; i++) {
        for (let j = 0; j < menus[i].submenus.length; j++) {
          menus[i].submenus[j].data.url = `${HttpConfig.dailyAffairsUrl}/${menus[i].submenus[j].data.url}`;
        }
      }
      this._menus = menus;
    });
  }

  ngOnInit() {
  }

}
