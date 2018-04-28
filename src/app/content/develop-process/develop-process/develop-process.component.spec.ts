import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopProcessComponent } from './develop-process.component';

describe('DevelopProcessComponent', () => {
  let component: DevelopProcessComponent;
  let fixture: ComponentFixture<DevelopProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
