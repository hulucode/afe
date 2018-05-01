import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyWeeklyComponent } from './weekly-fe.component';

describe('TechnologyWeeklyComponent', () => {
  let component: TechnologyWeeklyComponent;
  let fixture: ComponentFixture<TechnologyWeeklyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyWeeklyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyWeeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
