import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-steps-markdown',
  templateUrl: './steps-markdown.component.html',
  styleUrls: ['./steps-markdown.component.less']
})
export class StepsMarkdownComponent implements OnInit {

  _selectIndex;

  _path;

  _steps: any[];

  @ViewChild('left') left: ElementRef;

  @Input() set steps(steps: any[]) {
    if (steps && steps.length > 0) {
      this._selectIndex = 0;
      this._path = steps[0].data.url;
    }
    this._steps = steps;
  }

  constructor() {

  }

  ngOnInit() {
    const el = this.left.nativeElement as HTMLElement;
    el.style.minHeight = (document.documentElement.clientHeight - 104 - 84) + 'px';
  }

  stepSelect(step: any, index: number) {
    this._selectIndex = index;
    this._path = step.data.url;
  }

}
