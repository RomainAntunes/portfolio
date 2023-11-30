import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectsService} from "../../../../services/projects.service";
import {Project} from "../../models/project";
import {Observable, of, tap} from "rxjs";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  slug: string = '';
  project$!: Observable<Project | null>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly projectsService: ProjectsService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (!params.hasOwnProperty('slug')){
        this.router.navigate(['/']);
      }

      this.slug = params['slug'];
      this.projectsService.getProject(this.slug)
        .pipe(
          tap(project => {
            if (!project) {
              this.router.navigate(['/']);
            }
          })
        )
        .subscribe(project => {
          this.project$ = of(project);
        });
    });
  }

  returnBack(): void {
    this.router.navigate(['/']);
  }
}
