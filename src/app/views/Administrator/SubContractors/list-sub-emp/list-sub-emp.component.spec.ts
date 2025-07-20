import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubEmpComponent } from './list-sub-emp.component';

describe('ListSubEmpComponent', () => {
  let component: ListSubEmpComponent;
  let fixture: ComponentFixture<ListSubEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSubEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
