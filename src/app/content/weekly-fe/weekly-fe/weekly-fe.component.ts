import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpConfig } from '../../http.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weekly-fe',
  templateUrl: './weekly-fe.component.html',
  styleUrls: ['./weekly-fe.component.less']
})
export class WeeklyFeComponent implements OnInit {

  _timelines: any[];

  constructor(private http: HttpClient,private router:Router) {
    this.http.get(`${HttpConfig.weeklyFeUrl}/index.json`).toPromise().then(data => {
      const timelines = data as any[];
      for (let i = 0; i < timelines.length; i++) {
        timelines[i].data.url = `${HttpConfig.weeklyFeUrl}/${timelines[i].data.url}`;
      }
      this._timelines = timelines;
    });
  }

  ngOnInit() {

  }

  createPerson() {
    this.router.navigateByUrl('/luck');
  }

}
