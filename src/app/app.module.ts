import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgOptimizedImage} from "@angular/common";
import {NgIconsModule} from "@ng-icons/core";
import {heroArrowTopRightOnSquare, heroHome, heroXMark} from "@ng-icons/heroicons/outline";
import {ionCodeSlash, ionLogoGithub, ionLogoLinkedin, ionMailOutline} from "@ng-icons/ionicons";
import {HomeComponent} from './pages/home/home.component';
import {SharedModule} from "./shared/shared.module";
import {ProjectsComponent} from './pages/projects/projects.component';
import {ProjetDetailComponent} from './pages/projet-detail/projet-detail.component';
import {MarkdownModule} from "ngx-markdown";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    ProjetDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    NgIconsModule.withIcons({
      heroHome,
      heroArrowTopRightOnSquare,
      heroXMark,
      ionLogoLinkedin,
      ionLogoGithub,
      ionMailOutline,
      ionCodeSlash,
    }),
    SharedModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
