import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopRulesComponent } from './develop-rules.component';

describe('DevelopRulesComponent', () => {
  let component: DevelopRulesComponent;
  let fixture: ComponentFixture<DevelopRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
