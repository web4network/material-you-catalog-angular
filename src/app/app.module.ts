import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CookieNoticeComponent } from './cookie-notice/cookie-notice.component';
import { LeftNavRailComponent } from './left-nav-rail/left-nav-rail.component';
import { NavigationDrawerComponent } from './navigation-drawer/navigation-drawer.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, LeftNavRailComponent, NavigationDrawerComponent, CookieNoticeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
