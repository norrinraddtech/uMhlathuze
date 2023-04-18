import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileCase: string = 'view'
  profile = {
    firstname: 'Brad',
    lastname: 'Pitt',
    idnumber: '5783923874287',
    email: 'brad@pitt.co'
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

  edit = () => {
    this.profileCase = 'edit'
  }

  save = () => {

  }

  cancel = () => {
    this.profileCase = 'view'
  }

}
