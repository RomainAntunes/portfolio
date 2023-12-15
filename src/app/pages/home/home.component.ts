import {Component, HostListener} from '@angular/core';
import {Project} from "../../shared/models/project";
import {ProjectsService} from "../../shared/services/projects.service";
import {PermissionsService} from "../../shared/services/permissions.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  projects: Project[] = this.projectsService.getProjects();
  transform: string = '';

  private MAX_MOVEMENT = 5;

  constructor(
    private readonly projectsService: ProjectsService,
    private readonly permissionsService: PermissionsService
  ) {
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
}

