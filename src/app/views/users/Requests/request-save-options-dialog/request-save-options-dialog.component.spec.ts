import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestSaveOptionsDialogComponent } from './request-save-options-dialog.component';

describe('RequestSaveOptionsDialogComponent', () => {
  let component: RequestSaveOptionsDialogComponent;
  let fixture: ComponentFixture<RequestSaveOptionsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestSaveOptionsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestSaveOptionsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
