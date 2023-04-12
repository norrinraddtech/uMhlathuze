import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private toast: ToastController) { }

  presentToast = (message: string, status: string) => {
    return this.toast.create({
      message: message,
      // mode: 'ios',
      animated: true,
      duration: 3000,
      color: status
    })
  }
}
