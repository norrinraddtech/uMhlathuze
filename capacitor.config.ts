import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.umhlathuzeutilitytracker',
  appName: 'umhlathuzeutilitytracker',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: "#707070",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "large",
      spinnerColor: "#707070",
      showSpinner: false,
      splashFullScreen: false,
      splashImmersive: true
    }
  },
};

export default config;
