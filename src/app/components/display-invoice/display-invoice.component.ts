import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Filesystem, Directory } from '@capacitor/filesystem'
import { HttpClient } from '@angular/common/http'
import { FileOpener } from '@ionic-native/file-opener/ngx'
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-display-invoice',
  templateUrl: './display-invoice.component.html',
  styleUrls: ['./display-invoice.component.scss'],
})
export class DisplayInvoiceComponent  implements OnInit {
@Output('closeInvoice') closeInvoice: EventEmitter<boolean> = new EventEmitter()
url = 'assets/images/bills-invoice.pdf'
  constructor(private http: HttpClient, 
    private fileOpener: FileOpener,
    private message: MessageService) { }

  ngOnInit() {
    this.download()
  }

  close = () => {
    this.closeInvoice.emit(true)
  }
    
  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob)
  })
    
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
        
      } catch (error) {

        // (await this.message.presentToast('Oops, something went worng.', 'danger')).present()
        
      }
    })
  }
}
