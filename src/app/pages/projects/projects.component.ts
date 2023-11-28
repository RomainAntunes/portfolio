import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProjectsService} from "../../services/projects.service";
import {Project} from "./models/project";
import {Observable} from "rxjs";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  @ViewChild('projectsContent') projectsContent!: ElementRef;

  projects$!: Observable<Project[]>;

  isSwiping: boolean = false;

  constructor(
    private readonly projectsService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.projects$ = this.projectsService.getProjects();
  }

  slideNext(): void {
    this.currentlySwiping();

    let firstChildWidth = this.projectsContent.nativeElement.children[0].clientWidth + 25;;
    this.projectsContent.nativeElement.scrollLeft += firstChildWidth;
  }

  slidePrev(): void {
    this.currentlySwiping();

    let firstChildWidth = this.projectsContent.nativeElement.children[0].clientWidth + 25;
    this.projectsContent.nativeElement.scrollLeft -= firstChildWidth;
  }

  // TODO: make it with scroll event
  currentlySwiping(): void {

    this.isSwiping = true;
    setInterval(() => {
      this.isSwiping = false;
    }, 900)
  }
}
