import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgOptimizedImage} from "@angular/common";
import {NgIconsModule} from "@ng-icons/core";
import {heroArrowTopRightOnSquare, heroCpuChip, heroHome} from "@ng-icons/heroicons/outline";
import {ionCodeSlash, ionLogoGithub, ionLogoLinkedin, ionMailOutline} from "@ng-icons/ionicons";
import {HomeComponent} from './pages/home/home.component';
import {SharedModule} from "./shared/shared.module";
import { ProjectsComponent } from './pages/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    NgIconsModule.withIcons({
      heroHome,
      heroCpuChip,
      heroArrowTopRightOnSquare,
      ionLogoLinkedin,
      ionLogoGithub,
      ionMailOutline,
      ionCodeSlash,
    }),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
