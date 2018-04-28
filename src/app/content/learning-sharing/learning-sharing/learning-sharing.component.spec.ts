import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningSharingComponent } from './learning-sharing.component';

describe('LearningSharingComponent', () => {
  let component: LearningSharingComponent;
  let fixture: ComponentFixture<LearningSharingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningSharingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
