import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HeroServiceProvider } from '../providers/hero-service/hero-service';
import { HttpClientModule } from '@angular/common/http';
import { HeroesPage } from '../pages/heroes/heroes';
import { HeroDetailsPage } from '../pages/hero-details/hero-details';
import { HeroDetailsPageModule } from '../pages/hero-details/hero-details.module';
import { NameServiceProvider } from '../providers/name-service/name-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HeroesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HeroDetailsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HeroesPage,
    HeroDetailsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HeroServiceProvider,
    NameServiceProvider,
  ]
})
export class AppModule {}
