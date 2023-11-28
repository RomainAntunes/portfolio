import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects: Projects[] = [
    ];

  constructor() { }

  getProjects(): Projects[] {
    return this.projects;
  }

  getProject(slug: string): Projects | null {
    return this.projects.find(project => project.slug === slug) || null;
  }
}
