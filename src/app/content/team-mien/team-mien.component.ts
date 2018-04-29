import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpConfig } from '../http.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-mien',
  templateUrl: './team-mien.component.html',
  styleUrls: ['./team-mien.component.less']
})
export class TeamMienComponent implements OnInit {

  _members: any[];

  constructor(private http: HttpClient, private router: Router) {
    this.http.get(`${HttpConfig.teamMienUrl}/index.json`).toPromise().then(data => {
      const _members = data as any[];
      for (let i = 0; i < _members.length; i++) {
        _members[i].img = `${HttpConfig.teamMienUrl}/${_members[i].img}`;
      }
      this._members = _members;
    });
  }

  ngOnInit() {

  }

  joinUs() {
    this.router.navigateByUrl('/recruiting');
  }

}
