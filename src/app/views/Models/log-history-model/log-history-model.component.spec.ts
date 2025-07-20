import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogHistoryModelComponent } from './log-history-model.component';

describe('LogHistoryModelComponent', () => {
  let component: LogHistoryModelComponent;
  let fixture: ComponentFixture<LogHistoryModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogHistoryModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogHistoryModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
