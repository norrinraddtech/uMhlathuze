import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login = {
    email: '',
    password: ''
  }


  constructor(private router: Router) { }

  ngOnInit() {
  }

  forgotPassword = () => {
    this.router.navigateByUrl('');
  }

  submit = () => {
    console.log("email", this.login.email)
    console.log("password", this.login.password)
  }

}
