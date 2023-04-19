import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-display-invoice',
  templateUrl: './display-invoice.component.html',
  styleUrls: ['./display-invoice.component.scss'],
})
export class DisplayInvoiceComponent  implements OnInit {
@Output('closeInvoice') closeInvoice: EventEmitter<boolean> = new EventEmitter()
  constructor() { }

  ngOnInit() {}

  close = () => {
    this.closeInvoice.emit(true)
  }
}
