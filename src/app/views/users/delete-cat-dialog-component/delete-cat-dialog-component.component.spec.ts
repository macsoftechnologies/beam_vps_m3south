import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCatDialogComponentComponent } from './delete-cat-dialog-component.component';

describe('DeleteCatDialogComponentComponent', () => {
  let component: DeleteCatDialogComponentComponent;
  let fixture: ComponentFixture<DeleteCatDialogComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCatDialogComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCatDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
