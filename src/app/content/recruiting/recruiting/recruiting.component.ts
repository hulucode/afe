import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpConfig } from '../../http.config';

@Component({
  selector: 'app-recruiting',
  templateUrl: './recruiting.component.html',
  styleUrls: ['./recruiting.component.less']
})
export class RecruitingComponent implements OnInit {

  _isVisibleMiddle;

  _cards: any[];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get(`${HttpConfig.recruitingUrl}/index.json`).toPromise().then(data => {
      this._cards = data as any[];
    });
  }

  backAction() {
    this.router.navigateByUrl('/develop-rules');
  }

  openSite(url) {
    window.open(url, '_blank');
  }

  sendResume() {
    this._isVisibleMiddle = true;
  }

  handleCancelMiddle(): void {
    this._isVisibleMiddle = false;
  }

}
