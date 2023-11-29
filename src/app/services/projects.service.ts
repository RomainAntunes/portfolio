import {Injectable} from '@angular/core';
import {Project} from "../pages/projects/models/project";
import {Observable, of} from "rxjs";
import {Technologies} from "../pages/projects/models/technologies";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects: Project[] = [
    {
      slug: 'wiiseto',
      name: 'Wiiseto',
      description: 'We are 2 students in "Software development" and we had the idea and the desire to develop an application that will connect all participants of real estate projects in the same place.\n\n' +
        'We realized, that during real estate projects or even other categories. When there are several players and you have to transmit information, it can last and waste time quickly.\n\n' +
        'That’s why we decided to develop "Wiiseto".\n\n' +
        'An application that will allow to invite all the actors of a project in the same place and to be able to exchange documents, information on current projects.',
      image: 'assets/screenshots/Wiiseto.jpeg',
      in_progress: true,
      links: [
        {
          name: 'Wiiseto Website',
          url: 'https://wiiseto.com'
        },
        {
          name: 'Wiiseto Github',
          url: 'https://github.com/wiiseto'
        }
      ],
      technologies: [
        Technologies.Angular,
        Technologies.SpringBoot,
        Technologies.SpringSecurity,
        Technologies.Hibernate,
        Technologies.PostgreSQL,
        Technologies.Lombok,
        Technologies.Docker,
        Technologies.AWS,
        Technologies.GIT,
      ]
    },
    {
      slug: 'portfolio',
      name: 'Portfolio',
      description: 'The porfolio you are currently viewing.',
      image: 'assets/screenshots/romainantunes.jpeg',
      in_progress: false,
      links: [
        {
          name: 'Portfolio Github',
          url: 'https://github.com/romainantunes/portfolio'
        },
        {
          name: 'Portfolio Website',
          url: 'https://romainantunes.com'
        }
      ],
      technologies: [
        Technologies.Angular,
        Technologies.Infomaniak
      ]
    }
  ];

  constructor() {
  }

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProject(slug: string): Observable<Project | null> {
    let project = this.projects.find(project => project.slug === slug)

    if (project) {
      return of(project);
    }

    return of(null);
  }
}
