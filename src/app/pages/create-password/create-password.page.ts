import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.page.html',
  styleUrls: ['./create-password.page.scss'],
})
export class CreatePasswordPage implements OnInit {

  oldPassword: boolean = true;
  constructor(private router: Router, private localstorage: LocalstorageService) { }

  ngOnInit() {
    this.oldPassword = this.localstorage.get('user') ? true : false
  }

  save() {
    this.router.navigateByUrl('tabs')
  }

}
