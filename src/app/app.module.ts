import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {ProjectDetailComponent} from './pages/projects/components/project-detail/project-detail.component';
import {PersonnalComponent} from './pages/personnal/personnal.component';
import {NgOptimizedImage} from "@angular/common";
import {DotsComponent} from './pages/shared/dots/dots.component';
import {NgIconsModule} from "@ng-icons/core";
import {heroArrowLeft, heroArrowRight, heroCpuChip, heroLink, heroWrenchScrewdriver} from "@ng-icons/heroicons/outline";

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    PersonnalComponent,
    DotsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    NgIconsModule.withIcons({ heroArrowLeft, heroWrenchScrewdriver, heroLink, heroCpuChip, heroArrowRight }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
