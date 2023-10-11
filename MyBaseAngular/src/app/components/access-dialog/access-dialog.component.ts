import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'access-dialog',
  templateUrl: './access-dialog.component.html',
  styleUrls: ['./access-dialog.component.scss']
})
export class AccessDialogComponent implements OnInit {
  form: FormGroup;
  user: string;
  pass: string;
  error: boolean = false;
  data: any;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AccessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {

    this.user = data.user;
    this.pass = data.pass;

    this.form = this.fb.group({
      user: this.user,
      pass: this.pass
    });
  }

  ngOnInit() {
    this.form = this.fb.group({
      user: this.user,
      pass: this.pass
    });
  }

  signIn() {
    
  }

  signUp() {
    
  }
}