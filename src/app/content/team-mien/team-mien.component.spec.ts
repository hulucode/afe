import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMienComponent } from './team-mien.component';

describe('TeamMienComponent', () => {
  let component: TeamMienComponent;
  let fixture: ComponentFixture<TeamMienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamMienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
