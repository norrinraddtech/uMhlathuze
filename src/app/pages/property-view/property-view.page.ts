import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-property-view',
  templateUrl: './property-view.page.html',
  styleUrls: ['./property-view.page.scss'],
})
export class PropertyViewPage implements OnInit {
  
  property = { name: '', address: '', usage: '' };
  constructor(private route: ActivatedRoute) 
  {
    let prop = this.route.snapshot.paramMap.get('id')
    if (prop) {
      this.property = JSON.parse(prop)
    }
  }
  
  ngOnInit() {
    
  }
  
}
