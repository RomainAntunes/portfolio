import {Component, HostListener, OnInit} from '@angular/core';
import {Project} from "../../shared/models/project";
import {ProjectsService} from "../../shared/services/projects.service";
import {PermissionsService} from "../../shared/services/permissions.service";
import {GithubService} from "../../shared/services/github.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects?: Project[];
  totalProjects: number = 0;

  transform: string = '';

  company$ = new Observable<string>();

  private MAX_MOVEMENT = 5;

  constructor(
    private readonly projectsService: ProjectsService,
    private readonly permissionsService: PermissionsService,
    private readonly githubService: GithubService
  ) {
  }

  ngOnInit() {
    this.totalProjects = this.projectsService.getProjects().length;
    this.projects = this.projectsService.getProjects()
      .slice(0, 6);

    this.company$ = this.githubService.getCompany();
  }

  // get angle of mobile
  @HostListener('window:deviceorientation', ['$event'])
  onOrientationChange(event: DeviceOrientationEvent) {
    if (!this.permissionsService.isMobile) return;
    if (!this.permissionsService.isGranted('deviceOrientation')) return;

    const {alpha, beta, gamma} = event;

    let rotateY = gamma ? gamma : 0;
    let rotateX = beta ? beta : 0;

    let rotateYpx = Math.min(Math.max(rotateY, -this.MAX_MOVEMENT), this.MAX_MOVEMENT).toFixed(2);
    let rotateXpx = Math.min(Math.max(rotateX, -this.MAX_MOVEMENT), this.MAX_MOVEMENT).toFixed(2);

    this.transform = `translateZ(0) translateX(${rotateYpx}px) translateY(${rotateXpx}px)`
  }

  generateArray(number: number) {
    return new Array(number);
  }
}

