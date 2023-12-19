import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectsService} from "../../shared/services/projects.service";
import {Project, ProjectGithub} from "../../shared/models/project";
import {Title} from "@angular/platform-browser";
import {GithubService} from "../../shared/services/github.service";
import {catchError, Observable} from "rxjs";

@Component({
  selector: 'app-projet-detail',
  templateUrl: './projet-detail.component.html',
  styleUrls: ['./projet-detail.component.scss']
})
export class ProjetDetailComponent implements OnInit {

  slug?: string;
  project?: Project;
  notFound: boolean = false;
  readMe$: Observable<string> = new Observable<string>();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly projectService: ProjectsService,
    private readonly titleService: Title,
    private readonly githubService: GithubService
  ) {
  }

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug') ?? undefined;
    this.project = this.projectService.findProjectByName(this.slug ?? '');

    if (!this.project) {
      this.router.navigate(['/projects']);
    }

    this.titleService.setTitle(this.project?.title + " - Romain Antunes");

    this.notFound = this.project?.github === undefined;
    if (this.project?.github) {

      if (typeof this.project.github !== 'string' && this.project.github.noReadMe) {
        this.notFound = true;
        return;
      }

      this.readMe$ = this.githubService.getReadMe(this.project?.github)
        .pipe(
          catchError(
            (err) => {
              this.notFound = err.status === 404;
              return new Observable<string>();
            }
          )
        );
    }
  }

  generateGitHubUrl(github: string | ProjectGithub) {
    return this.githubService.generateGitHubUrl(github);
  }
}
