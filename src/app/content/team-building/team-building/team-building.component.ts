import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpConfig } from '../../http.config';

@Component({
  selector: 'app-team-building',
  templateUrl: './team-building.component.html',
  styleUrls: ['./team-building.component.less']
})
export class TeamBuildingComponent implements OnInit {

  _menus: any[];

  constructor(private http: HttpClient, private router: Router) {
    this.http.get(`${HttpConfig.teamBuildingUrl}/index.json`).toPromise().then(data => {
      const menus = data as any[];
      for (let i = 0; i < menus.length; i++) {
        for (let j = 0; j < menus[i].submenus.length; j++) {
          menus[i].submenus[j].data.url = `${HttpConfig.teamBuildingUrl}/${menus[i].submenus[j].data.url}`;
        }
      }
      this._menus = menus;
    });
  }

  ngOnInit() {

  }

  backAction() {
    this.router.navigateByUrl('/develop-rules');
  }

  openSite(url) {
    window.open(url, '_blank');
  }

  joinUs() {
    this.router.navigateByUrl('/recruiting');
  }

}
