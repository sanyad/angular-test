import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserDialogFormComponent } from './create-user-dialog-form.component';

describe('CreateUserDialogFormComponent', () => {
  let component: CreateUserDialogFormComponent;
  let fixture: ComponentFixture<CreateUserDialogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserDialogFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
