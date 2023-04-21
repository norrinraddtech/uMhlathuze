import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-card',
  templateUrl: './bank-card.component.html',
  styleUrls: ['./bank-card.component.scss'],
})
export class BankCardComponent  implements OnInit {

  cards = [
    {
      type: 'Credit Card',
      holder: 'DP Naidoo',
      cardNumber: '4790 XXXX XXXX XX19',
      default: true
    },
    {
      type: 'Credit Card',
      holder: 'DP Naidoo',
      cardNumber: '4790 XXXX XXXX XX19',
      default: false
    }
  ]
  constructor() { }

  ngOnInit() {}

}
