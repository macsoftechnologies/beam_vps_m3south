import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSafetyprecautionComponent } from './list-safetyprecaution.component';

describe('ListSafetyprecautionComponent', () => {
  let component: ListSafetyprecautionComponent;
  let fixture: ComponentFixture<ListSafetyprecautionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSafetyprecautionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSafetyprecautionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
