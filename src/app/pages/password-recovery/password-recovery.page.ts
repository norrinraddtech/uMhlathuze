import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.page.html',
  styleUrls: ['./password-recovery.page.scss'],
})
export class PasswordRecoveryPage implements OnInit {

  constructor(private router: Router) 
  { 
  }

  ngOnInit() {
  }

  send = () => {
    this.router.navigateByUrl('create-password')
  }

}
