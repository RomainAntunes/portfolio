import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectsService} from "../../shared/services/projects.service";
import {Project} from "../../shared/models/project";

@Component({
  selector: 'app-projet-detail',
  templateUrl: './projet-detail.component.html',
  styleUrls: ['./projet-detail.component.scss']
})
export class ProjetDetailComponent implements OnInit {

  slug?: string;
  project?: Project;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly projectService: ProjectsService
  ) {
  }

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug') ?? undefined;
    this.project = this.projectService.findProjectByName(this.slug ?? '');

    if (!this.project) {
      this.router.navigate(['/projects']);
    }
  }
}
