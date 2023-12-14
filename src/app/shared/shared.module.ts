import {APP_INITIALIZER, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgIcon} from "@ng-icons/core";
import { FooterComponent } from './components/footer/footer.component';
import {DarkmodeService} from "./services/darkmode.service";
import {FormsModule} from "@angular/forms";



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
    RouterLinkActive,
    FormsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (darkmodeService: DarkmodeService) => () => darkmodeService.loadDarkMode(),
      deps: [DarkmodeService],
      multi: true
    }
  ]
})
export class SharedModule { }
