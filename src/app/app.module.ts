import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentsModule } from './contents/contents.module';
import { NavbarModule } from './nav-bar/navbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    ContentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
