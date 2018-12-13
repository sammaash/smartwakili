import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
    apiKey: "AIzaSyAa8y9vf48rx_LLOK1LKp59F35Au_P1sqI",
    authDomain: "wakili-c39df.firebaseapp.com",
    databaseURL: "https://wakili-c39df.firebaseio.com",
    projectId: "wakili-c39df",
    storageBucket: "wakili-c39df.appspot.com",
    messagingSenderId: "656311448702"
};


import { NgCalendarModule  } from 'ionic2-calendar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http'
import { GlobalProvider } from '../providers/global/global';


@NgModule({
  declarations: [
    MyApp,
    HomePage
    
  ],
  imports: [ 
    FormsModule, 
    MbscModule,
    BrowserModule,
    HttpClientModule,
  NgCalendarModule,
  AngularFireModule.initializeApp(firebaseConfig), 
        AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider
  ]
})
export class AppModule {}
