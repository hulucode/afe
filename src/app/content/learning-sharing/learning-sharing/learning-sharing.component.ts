import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpConfig } from '../../http.config';

@Component({
  selector: 'app-learning-sharing',
  templateUrl: './learning-sharing.component.html',
  styleUrls: ['./learning-sharing.component.less']
})
export class LearningSharingComponent implements OnInit {

  _timelines: any[];

  constructor(private http: HttpClient) {
    this.http.get(`${HttpConfig.learningSharingUrl}/index.json`).toPromise().then(data => {
      const timelines = data as any[];
      for (let i = 0; i < timelines.length; i++) {
        timelines[i].data.url = `${HttpConfig.learningSharingUrl}/${timelines[i].data.url}`;
      }
      this._timelines = timelines;
    });
  }

  ngOnInit() {

  }

}
