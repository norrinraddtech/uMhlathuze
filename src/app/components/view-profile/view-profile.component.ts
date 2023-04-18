import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss'],
})
export class ViewProfileComponent  implements OnInit {

  @Input('profile') profile: any;
  constructor() { }

  ngOnInit() {}

}
