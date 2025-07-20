import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsHistoryComponent } from './logs-history.component';

describe('LogsHistoryComponent', () => {
  let component: LogsHistoryComponent;
  let fixture: ComponentFixture<LogsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
