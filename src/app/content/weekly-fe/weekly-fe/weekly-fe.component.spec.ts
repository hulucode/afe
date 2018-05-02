import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyFeComponent } from './weekly-fe.component';

describe('WeeklyFeComponent', () => {
  let component: WeeklyFeComponent;
  let fixture: ComponentFixture<WeeklyFeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyFeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyFeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
