import {APP_INITIALIZER, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgIcon} from "@ng-icons/core";
import { FooterComponent } from './components/footer/footer.component';
import {DarkmodeService} from "./services/darkmode.service";
import {FormsModule} from "@angular/forms";
import { PermissionComponent } from './components/permission/permission.component';
import {PermissionsService} from "./services/permissions.service";



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PermissionComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    PermissionComponent
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
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (permissionsService: PermissionsService) => () => permissionsService.loadPermission(),
      deps: [PermissionsService],
      multi: true
    }
  ]
})
export class SharedModule { }
