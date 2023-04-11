import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Plugin } from '@capacitor/core'
import { HttpClient } from '@angular/common/http'
import { FileOpener } from '@ionic-native/file-opener/ngx'
import { Filesystem, Directory } from '@capacitor/filesystem'

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
      const name = this.url.substring(this.url.lastIndexOf('/') + 1)
      const base64 = await this.convertBlobToBase64(event) as string

      await Filesystem.writeFile({
        path: name,
        data: base64,
        directory: Directory.Documents
      })

      console.log('file saved!')
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
