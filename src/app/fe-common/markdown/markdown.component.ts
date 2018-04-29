import { Component, OnInit, Input } from '@angular/core';
import * as marked from 'marked';
import * as hljs from 'highlight.js';
import { SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code) {
    return hljs.highlightAuto(code, ['typescript']).value;
  },
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
});


@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.less']
})
export class MarkdownComponent implements OnInit {


  safeHtml: SafeHtml = 'loading ...';

  @Input() set path(path: string) {
    if (path) {
      this.http.get(path, { responseType: 'text' }).toPromise().then(data => {
        this.safeHtml = marked(data);
      }).catch(err => {
        console.log(err);
      });
    }
  }

  constructor(private http: HttpClient) {

  }

  ngOnInit() {

  }

}
