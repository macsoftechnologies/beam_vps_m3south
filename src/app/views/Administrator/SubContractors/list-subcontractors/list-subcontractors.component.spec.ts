import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubcontractorsComponent } from './list-subcontractors.component';

describe('ListSubcontractorsComponent', () => {
  let component: ListSubcontractorsComponent;
  let fixture: ComponentFixture<ListSubcontractorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSubcontractorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubcontractorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
