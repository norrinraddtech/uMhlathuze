import { Component, OnInit } from '@angular/core';
// import { Plugin } from '@capacitor/core'
// const { SplashScreen } = Plugins;
import { SplashScreen } from '@capacitor/splash-screen';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() 
  {
    this.splashScreen();
  }

  async ngOnInit() {
    await SplashScreen.show({
      showDuration: 3000,
      autoHide: false
    });
  }

  splashScreen = () => {
    setInterval(() => {
      
    }, 3000)
  }
}
