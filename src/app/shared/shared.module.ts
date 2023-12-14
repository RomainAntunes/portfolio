import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgIcon} from "@ng-icons/core";
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    NgIcon,
    RouterLinkActive
  ]
})
export class SharedModule { }
