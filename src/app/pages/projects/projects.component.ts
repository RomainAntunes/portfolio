import {Component} from '@angular/core';
import {ProjectsService} from "../../shared/services/projects.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects = this.projectsService.getProjects();

  constructor(
    private readonly projectsService: ProjectsService,
  ) {
  }
}
