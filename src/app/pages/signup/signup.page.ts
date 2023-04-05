import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  get firstname() {
    return this.signupForm.get('firstname')
  }

  get lastname() {
    return this.signupForm.get('lastname')
  }

  get idnumber() {
    return this.signupForm.get('idnumber')
  }

  get email() {
    return this.signupForm.get('email')
  }

  get password() {
    return this.signupForm.get('password')
  }

  get confirmPassword() {
    return this.signupForm.get('confirmPassword')
  }

  errorMessages = {
    firstname: [
      { type: 'required', message: 'firstname is required' }
    ],
    lastname: [
      { type: 'required', message: 'lastname is required' }
    ],
    idnumber: [
      { type: 'required', message: 'ID Number is required' },
      { type: 'maxLength', message: 'ID is not valid, must be 13 numbers max' }
    ],
    email: [
      { type: 'required', message: 'email is required' },
      { type: 'patttern', message: 'email is not valid' }
    ],
    password: [
      { type: 'required', message: 'email is required' },
      { type: 'patttern', message: 'password is not valid' },
      { type: 'patttern', message: 'password must have atleast 8 character' },
      { type: 'patttern', message: 'password must have atleast one capital letter' },
      { type: 'patttern', message: 'password must have atleast one symbol' },
      { type: 'patttern', message: 'password must have atleast on numeric character' }
    ],
    confirmPassword: [
      { type: 'required', message: 'confirm password is required' }
    ]
  }

  signupForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    idnumber: ['', [Validators.required, Validators.maxLength]],
    email: ['', [Validators.required, Validators.pattern]],
    password: ['', [Validators.required, Validators.pattern]],
    confirmPassword: ['', [Validators.required, Validators.pattern]]
  })
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

  submit = () => {

    this.router.navigateByUrl('tabs');
  }

}
