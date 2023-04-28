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

  constructor(private router: Router, 
    // private localstorage: LocalstorageService,
    private fb: FormBuilder,
    private loading: LoadingController) 
    { 
      this.loginForm = this.fb.group({
        email: ['', [Validators.required]],
        password: ['', [Validators.required]]
      })
    }
  ngOnInit() {
  }

  get errorControl() {
    return this.loginForm.controls;
  }

  forgotPassword = () => {

    this.router.navigateByUrl('');
  }

  submit = async () => {
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
