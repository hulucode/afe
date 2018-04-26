import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeCommonComponent } from './fe-common.component';

describe('FeCommonComponent', () => {
  let component: FeCommonComponent;
  let fixture: ComponentFixture<FeCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
