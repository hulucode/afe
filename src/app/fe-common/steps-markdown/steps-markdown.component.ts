import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-steps-markdown',
  templateUrl: './steps-markdown.component.html',
  styleUrls: ['./steps-markdown.component.less']
})
export class StepsMarkdownComponent implements OnInit {

  _selectIndex;

  _path;

  _steps: any[];

  @Input() set steps(steps: any[]) {
    this._selectIndex = 0;
    this._path = steps[0].data.url;
    this._steps = steps;
  }

  constructor() {

  }

  ngOnInit() {

  }

  stepSelect(step: any, index: number) {
    this._selectIndex = index;
    this._path = step.data.url;
  }

}
