import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { TabsPage } from '../pages/tabs/tabs';
import { Tab1Page } from '../pages/tab1/tab1';
import { Tab2Page } from '../pages/tab2/tab2';
import { Tab3Page } from '../pages/tab3/tab3';
import { ModalPage } from '../pages/modal/modal';
import { LugaresProvider } from '../providers/lugares/lugares';
import { Modal2Page } from '../pages/modal2/modal2';
import { CitasProvider } from '../providers/equipos/citas';

export const firebaseConfig = {
  apiKey: "AIzaSyBp9Km9DgFI9hpYe6SGMh7vEifCMC3S49w",
  authDomain: "prueba-7e6bf.firebaseapp.com",
  databaseURL: "https://prueba-7e6bf.firebaseio.com",
  projectId: "prueba-7e6bf",
  storageBucket: "prueba-7e6bf.appspot.com",
  messagingSenderId: "1066365639881",
  appId: "1:1066365639881:web:7906169c30ba459b"
};

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    Tab1Page,
    Tab2Page,
    Tab3Page,
    ModalPage,
    Modal2Page

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp , {backButtonText: 'Atras'}),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    Tab1Page,
    Tab2Page,
    Tab3Page,
    ModalPage,
    Modal2Page

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LugaresProvider,
    CitasProvider
  ]
})
export class AppModule {}
