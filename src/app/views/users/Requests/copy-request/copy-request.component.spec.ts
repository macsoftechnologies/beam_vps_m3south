import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyRequestComponent } from './copy-request.component';

describe('CopyRequestComponent', () => {
  let component: CopyRequestComponent;
  let fixture: ComponentFixture<CopyRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
