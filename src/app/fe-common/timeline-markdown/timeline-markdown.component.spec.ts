import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineMarkdownComponent } from './timeline-markdown.component';

describe('TimelineMarkdownComponent', () => {
  let component: TimelineMarkdownComponent;
  let fixture: ComponentFixture<TimelineMarkdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineMarkdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
