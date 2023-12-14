import { Injectable } from '@angular/core';
import {Project} from "../models/project";
import {Technology} from "../models/technology";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {
      img: '',
      title: 'Wiiseto',
      description: 'A web application to manage for real estate project',
      slug: 'wiiseto',
      github: 'https://github.com/wiiseto',
      inUse: false,
      inProgress: true,
      mainColor: 'rgba(21,75,201, 0.6)',
      technologies: [
        Technology.Angular,
        Technology.SpringBoot,
        Technology.AWS,
        Technology.PostgreSQL,
        Technology.Docker,
        Technology.TailwindCSS
      ]
    },
    {
      img: '',
      title: 'Pomodoro',
      description: 'My personal pomodoro timer, made with Angular',
      slug: 'pomodoro',
      website: 'https://pomodoro.romainantunes.dev',
      github: 'https://github.com/romainantunes/pomodoro',
      inUse: true,
      inProgress: true,
      technologies: [
        Technology.Angular,
        Technology.TailwindCSS
      ]
    },
  ]

  constructor() { }

  getProjects() {
    return this.projects;
  }
}
