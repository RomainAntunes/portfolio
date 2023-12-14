import {Component} from '@angular/core';
import {Project} from "../../shared/models/project";
import {Technology} from "../../shared/models/technology";
import {ProjectsService} from "../../shared/services/projects.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  projects: Project[] = this.projectsService.getProjects();

  constructor(
    private readonly projectsService: ProjectsService,
  ) {
  }
}
