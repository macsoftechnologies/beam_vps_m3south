import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSubEmpListComponent } from './team-sub-emp-list.component';

describe('TeamSubEmpListComponent', () => {
  let component: TeamSubEmpListComponent;
  let fixture: ComponentFixture<TeamSubEmpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamSubEmpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamSubEmpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
