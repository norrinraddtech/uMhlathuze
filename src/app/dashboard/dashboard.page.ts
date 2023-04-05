import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  property = [
    { name: 'Family house', address: '2 brag st, sandton', usage: '2,364.67' },
    { name: 'Holiday house', address: '2 gate st, cape town', usage: '17,568.67' },
    { name: 'Penthouse', address: '27 turner st, durban', usage: '37,423.67' },
    { name: 'Town house', address: '378 tuble rd, east london', usage: '24,364.67' }
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewProperty = (p: any) => {
    console.log('p', p)
    this.router.navigateByUrl(`property-view/${JSON.stringify(p)}`)
  }

}
