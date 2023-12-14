import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {ProjectsListComponent} from "./pages/projects-list/projects-list.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        title: 'Home | Romain Antunes',
        component: HomeComponent,
      },
      {
        path: 'projects',
        title: 'Projects | Romain Antunes',
        children: [
          {
            path: '',
            component: ProjectsComponent,
          },
          {
            path: ':slug',
            component: ProjectsListComponent,
          }
        ]
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
