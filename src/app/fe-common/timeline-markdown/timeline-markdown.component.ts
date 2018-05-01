import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-timeline-markdown',
  templateUrl: './timeline-markdown.component.html',
  styleUrls: ['./timeline-markdown.component.less']
})
export class TimelineMarkdownComponent implements OnInit {

  _path;

  _selectIndex;

  _timelines: any[];

  @ViewChild('left') left: ElementRef;

  @Input() otherHeight: number;

  @Input() set timelines(timelines: any[]) {
    this._selectIndex = 0;
    if (timelines) {
      for (let i = 0; i < timelines.length; i++) {
        if (timelines[i].status != null) {
          timelines[i].color = timelines[i].status === 'done' ? 'green' : 'red';
        } else {
          timelines[i].color = 'blue';
        }
      }
      const tl = timelines.reverse();
      this._path = tl[0].data.url;
      this._timelines = tl;
    }
  }

  constructor() {

  }

  ngOnInit() {
    const el = this.left.nativeElement as HTMLElement;
    el.style.minHeight = (document.documentElement.clientHeight - this.otherHeight) + 'px';
  }

  timelineSelect(timeline: any, index: number) {
    this._selectIndex = index;
    this._path = timeline.data.url;
  }

}
