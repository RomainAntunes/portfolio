import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectDetailComponent} from "./pages/projects/components/project-detail/project-detail.component";
import {PersonnalComponent} from "./pages/personnal/personnal.component";

const routes: Routes = [
  {
    path: '',
    component: PersonnalComponent,
    children: [
      {
        path: ':slug',
        component: ProjectDetailComponent
      },
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