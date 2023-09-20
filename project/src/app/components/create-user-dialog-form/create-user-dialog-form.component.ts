import {Component, EventEmitter, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-user-dialog-form',
  templateUrl: './create-user-dialog-form.component.html',
  styleUrls: ['./create-user-dialog-form.component.css']
})
export class CreateUserDialogFormComponent implements OnInit {
  closeDialog = new EventEmitter<any>();
  saveDialog = new EventEmitter<any>();

  constructor(public dialogRef: MatDialogRef<CreateUserDialogFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  cancelForm(event: any): void {
    this.dialogRef.close();
  }

  saveForm(event: any): void {
    this.saveDialog.emit(event);
    this.dialogRef.close();
  }
}
