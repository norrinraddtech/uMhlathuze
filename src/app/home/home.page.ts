import { Component, OnInit } from '@angular/core';
import { Filesystem, Directory } from '@capacitor/filesystem'
import { HttpClient } from '@angular/common/http'
import { FileOpener } from '@ionic-native/file-opener/ngx'
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  invoices = false;
  showHome = true;
  showInvoicePDF = false;
  showPayment = false;
  showBankCard = false;
  showAddCard = false;
  url = 'assets/images/bills-invoice.pdf'
  
  constructor(private http: HttpClient, 
    private fileOpener: FileOpener,) { }

  ngOnInit() {
  }

  closeAll = (event: boolean) => {
    this.invoices = event
    this.showHome = event
    this.showAddCard = event
    this.showBankCard = event
    this.showPayment = event
    this.showInvoicePDF = event
  }

  openAddCard = () => {
    this.closeAll(false)
    this.showAddCard = true
  }

  openBankCard = () => {
    this.closeAll(false)
    this.showBankCard = true
    // this.showHome = false
    // this.showPayment = false
    // this.invoices = false
  }

  backToAccounts = (event: any) => {
    // this.showPayment = !event
    // this.invoices = !event
    this.closeAll(!event)
    this.showHome = event
  }

  backToPayment = (event: any) => {
    // this.invoices = !event
    this.closeAll(!event)
    this.showPayment = event
  }

  openInvoice = (event: any) => {
    // this.showPayment = !event
    this.closeAll(!event)
    this.invoices = event
  }

  openPayment = (event: any) => {
    this.closeAll(!event)
    this.showPayment = event;
    // this.showHome = !event
  }

  openHome = () => {
    this.closeAll(false)
    this.showHome = true;
    // this.showPayment = false;
    // this.showBankCard = false;
    // this.invoices = false
  }

  close = () => {
    this.closeAll(false)
    this.invoices = true;
    // this.showHome = false;
    // this.showInvoicePDF = false;
  }

  openPDF = () => {
    // this.invoices = false;
    this.closeAll(false)
    this.invoices = true;
    this.download()
  }
    
  download = () => {
    this.http.get(this.url, { 
      responseType: 'blob'
    }).subscribe(async event => {
      try {
        const name = this.url.substring(this.url.lastIndexOf('/') + 1)
        const base64 = await this.convertBlobToBase64(event) as string
        
        const savedFile = await Filesystem.writeFile({
          path: name,
          data: base64,
          directory: Directory.Documents
        });
        
        // (await this.message.presentToast('PDF Downloaded Successfully!', 'success')).present()

        const path = savedFile.uri
        
        // this.url = savedFile.uri;

        // const uriPath = await Filesystem.getUri({
        //   directory: Directory.Documents,
        //   path: name
        // })

        this.fileOpener.open(path, 'application/pdf')
        .then(() => console.log('file opened'))
        .finally(() => { Filesystem.deleteFile({
          path: path
        }) })
        
      } catch (error) {

        // (await this.message.presentToast('Oops, something went worng.', 'danger')).present()
        
      }
    })
  }
    
  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob)
  })


}
