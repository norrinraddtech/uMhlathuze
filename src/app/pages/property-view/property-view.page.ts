import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Plugin } from '@capacitor/core'
import { HttpClient } from '@angular/common/http'
import { FileOpener } from '@ionic-native/file-opener/ngx'
import { Filesystem, Directory } from '@capacitor/filesystem'
import { AlertController, ToastController } from '@ionic/angular';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-property-view',
  templateUrl: './property-view.page.html',
  styleUrls: ['./property-view.page.scss'],
})
export class PropertyViewPage implements OnInit {
  
  property = { name: '', address: '', usage: '' };
  url = 'assets/images/bills-invoice.pdf'
  constructor(private route: ActivatedRoute, 
    private http: HttpClient,
    private fileOpener: FileOpener,
    private toast: ToastController,
    private message: MessageService,
    private router: Router) 
    {
      let prop = this.route.snapshot.paramMap.get('id')
      if (prop) {
        this.property = JSON.parse(prop)
      }
    }
    
    ngOnInit() {
      
    }
    
    makePayment = () => {
      this.router.navigateByUrl('tabs/balance')
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
          
          this.url = savedFile.uri;

          // const uriPath = await Filesystem.getUri({
          //   directory: Directory.Documents,
          //   path: name
          // })

          this.fileOpener.open(path, 'application/pdf')
          .then(() => console.log('file opened'))
          
        } catch (error) {

          (await this.message.presentToast('Oops, something went worng.', 'danger')).present()
          
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
  