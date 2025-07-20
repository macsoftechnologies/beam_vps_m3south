import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyprecautionComponent } from './safetyprecaution.component';

describe('SafetyprecautionComponent', () => {
  let component: SafetyprecautionComponent;
  let fixture: ComponentFixture<SafetyprecautionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyprecautionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyprecautionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
