import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestBuildingModelComponent } from './request-building-model.component';

describe('RequestBuildingModelComponent', () => {
  let component: RequestBuildingModelComponent;
  let fixture: ComponentFixture<RequestBuildingModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestBuildingModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestBuildingModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
