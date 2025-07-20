import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptEmpsComponent } from './dept-emps.component';

describe('DeptEmpsComponent', () => {
  let component: DeptEmpsComponent;
  let fixture: ComponentFixture<DeptEmpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptEmpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptEmpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
