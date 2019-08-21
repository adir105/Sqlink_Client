import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userForm: FormGroup;
  invalidUserNamePassword: boolean;
  public readonly invalidUserNamePasswordMsgError: string;
  public readonly currentPassword: string = '123456';

  constructor(private _router: Router) {
    this.initUserForm();
    this.invalidUserNamePassword = false;
    this.invalidUserNamePasswordMsgError = 'Invalid user name or password, please try again';
   }

  /**
   * This method redirect to 'search-book' page if the user typed current password.
   */
  public login(){
    const password = this.userForm.get('password').value;
    if(password === this.currentPassword){
      this.invalidUserNamePassword = false;
    this._router.navigate(['/search-book', this.userForm.get('userName').value]);
    }
    else{
      this.invalidUserNamePassword = true;
    }
  }

  /**
   * This method init the user form with Angular Reactive Forms design.
   */
  initUserForm() {
    this.userForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
}
