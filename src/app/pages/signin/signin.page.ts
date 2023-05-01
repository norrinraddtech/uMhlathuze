import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  loginForm: FormGroup
  ss = true;
  submitError = true;

  constructor(private router: Router, 
    // private localstorage: LocalstorageService,
    private fb: FormBuilder,
    private loading: LoadingController) 
    { 
      this.loginForm = this.fb.group({
        email: ['', [Validators.required]],
        password: ['', [Validators.required]]
      })

      this.splashScreen()
    }
  ngOnInit() {
  }

  splashScreen = () => {
    setTimeout(() => {
      this.ss = false
    }, 3000)

  }

  viewPassword = () => {
    console.log('did enter')
    const element = document.getElementById('viewPassword')
    const attr = element?.getAttribute('type')
    let setAttr = attr === 'password' ? 'text' : 'password'
    element?.setAttribute('type', setAttr);
  }

  get errorControl() {
    return this.loginForm.controls;
  }

  forgotPassword = () => {

    this.router.navigateByUrl('');
  }

  submit = async () => {

    console.log(this.loginForm)

    if (!this.errorControl.email.valid && !this.errorControl.password.valid) {
      this.submitError = false
    } else {
      let loading = this.loading.create({
        spinner: 'circles',
        showBackdrop: true,
        backdropDismiss: true
      });
  
      (await loading).present()
      if (this.loginForm.valid) {
        console.log(this.loginForm)
        // this.localstorage.set('user', this.loginForm.value);
      }
  
      console.log(this.loginForm)
      this.router.navigateByUrl('home');
      (await loading).dismiss()
    }

    
  }

}
