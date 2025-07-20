import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JwtAuthService } from 'app/shared/services/auth/jwt-auth.service';
import { ChangePasswordDto } from 'app/views/Models/AccountManagement';
import { AccountManagementService } from 'app/shared/services/accountmanagement.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  ChangePasswordForm: FormGroup;
  user: any = {};
  spinner:boolean=false;

  changepassworddata: ChangePasswordDto =
    {
      id: null,
      password: null
    }
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar,
    private jwtauthservice: JwtAuthService, private changepwdservice: AccountManagementService) { }

  ngOnInit(): void {
    this.ChangePasswordForm = this.fb.group({
      newpassword: ['', [Validators.required]],
      confirmnewpassword: ['', Validators.required]
    },
    {
      validator: MustMatch('newpassword', 'confirmnewpassword')
  }
    );
    this.user = this.jwtauthservice.getUser();
  }

  Changepassword() {
    this.spinner=true;
    this.changepassworddata.id = this.user["id"];
    this.changepassworddata.password = this.ChangePasswordForm.controls["newpassword"].value;
    this.changepwdservice.ChangePassword(this.changepassworddata).subscribe(res => 
      {
        this.spinner=false;
        this.openSnackBar("Password updated Successfully");
        this.ChangePasswordForm.reset();
        this.jwtauthservice.signout();
      },
      error=>
      {
        this.openSnackBar("Something went wrong. Plz try again later...");
      }
    );

  }
 openSnackBar(msg) {
    this._snackBar.open(msg, "Close", {
      duration: 2000,
    });
  }


  
}
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}
