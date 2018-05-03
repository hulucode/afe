import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as marked from 'marked';
import * as hljs from 'highlight.js';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code) {
    return hljs.highlightAuto(code, ['typescript', 'js', 'html', 'css']).value;
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

  anchors: any[];

  @Input() set path(path: string) {
    if (path && path !== '') {
      this.http.get(path, { responseType: 'text' }).toPromise().then(data => {
        let md_data = marked(data).replace(/\<pre\>/g, '<pre class="hljs">');
        const hs = md_data.match(/\<h[1-9]+ id=".+"\>.+\<\/h[1-9]+\>?/g);
        if (hs && hs.length > 0) {
          this.anchors = [];
          for (let i = 0; i < hs.length; i++) {
            const h = hs[i];
            const title = h.replace(/(\<h[1-9]+ id=".+"\>)|(<\/h[1-9]+\>)/g, '');
            const id = `md_${i}`;
            const hSize = h.match(/\<\/h[1-9]+>/)[0].match(/[1-9]+/);
            const h_new = `<h${hSize} id="${id}">${title}</h${hSize}>`;
            md_data = md_data.replace(h, h_new);
            // 生成锚点数据
            const anchor = {
              title: title,
              id: id
            };
            this.anchors.push(anchor);
          }
        } else {
          this.anchors = [];
        }
        this.safeHtml = this.sanitized.bypassSecurityTrustHtml(md_data);
      }).catch(err => {
        console.log(err);
      });
    } else {
      this.anchors = [];
    }
  }

  constructor(private http: HttpClient, private sanitized: DomSanitizer) {

  }

  ngOnInit() {

  }

}
