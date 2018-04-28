import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsMarkdownComponent } from './steps-markdown.component';

describe('StepsMarkdownComponent', () => {
  let component: StepsMarkdownComponent;
  let fixture: ComponentFixture<StepsMarkdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsMarkdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
