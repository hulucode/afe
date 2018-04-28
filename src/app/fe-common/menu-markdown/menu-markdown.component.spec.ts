import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMarkdownComponent } from './menu-markdown.component';

describe('MenuMarkdownComponent', () => {
  let component: MenuMarkdownComponent;
  let fixture: ComponentFixture<MenuMarkdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMarkdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
