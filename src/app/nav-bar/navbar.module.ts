import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    NavBarComponent,
    BannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavbarModule { }