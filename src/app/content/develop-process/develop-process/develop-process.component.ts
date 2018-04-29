import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpConfig } from '../../http.config';

@Component({
  selector: 'app-develop-process',
  templateUrl: './develop-process.component.html',
  styleUrls: ['./develop-process.component.less']
})
export class DevelopProcessComponent implements OnInit {

  _steps: any[];

  constructor(private http: HttpClient) {
    this.http.get(`${HttpConfig.developProcessUrl}/index.json`).toPromise().then(data => {
      const steps = data as any[];
      for (let i = 0; i < steps.length; i++) {
        steps[i].data.url = `${HttpConfig.developProcessUrl}/${steps[i].data.url}`;
      }
      this._steps = steps;
    });
  }

  ngOnInit() {

  }

}
