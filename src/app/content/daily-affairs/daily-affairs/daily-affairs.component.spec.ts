import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyAffairsComponent } from './daily-affairs.component';

describe('DailyAffairsComponent', () => {
  let component: DailyAffairsComponent;
  let fixture: ComponentFixture<DailyAffairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyAffairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyAffairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
