import {Injectable} from '@angular/core';
import {Project} from "../models/project";
import {Technology} from "../models/technology";
import {HttpClient} from "@angular/common/http";

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
      github: {
        url: 'https://github.com/romainantunes/pomodoro',
        name: 'pomodoro'
      },
      inUse: true,
      inProgress: true,
      technologies: [
        Technology.Angular,
        Technology.TailwindCSS
      ]
    },
    {
      img: 'assets/memoji.svg',
      title: 'Actual Portfolio',
      description: 'My actual portfolio, made with Angular',
      slug: 'portfolio',
      website: 'https://romainantunes.dev',
      github: {
        url: 'https://github.com/romainantunes/portfolio',
        name: 'portfolio'
      },
      inUse: true,
      inProgress: true,
      technologies: [
        Technology.Angular,
        Technology.TailwindCSS
      ]
    },
    {
      img: 'assets/memoji.svg',
      title: 'Old Portfolio',
      description: 'My old portfolio',
      slug: 'pomodoro-old',
      website: 'https://old.romainantunes.dev',
      github: {
        url: 'https://github.com/RomainAntunes/portfolio/tree/v1.0.0',
        name: 'portfolio',
        version: 'v1.0.0'
      },
      inUse: false,
      inProgress: false,
      technologies: [
        Technology.Angular,
        Technology.TailwindCSS
      ]
    },
    {
      img: '',
      title: 'Mercure',
      description: 'E-commerce website with storage management and checkout',
      slug: 'mercure',
      github: {
        url: 'https://github.com/Homie-s-Project/mercure',
        name: 'mercure',
        org: 'Homie-s-Project'
      },
      inUse: false,
      inProgress: false,
      technologies: [
        Technology.Angular,
        Technology.CSharp,
        Technology.Docker,
        Technology.PostgreSQL,
        Technology.Grafana,
        Technology.Redis,
        Technology.Stripe,
      ]
    },
    {
      img: '',
      title: 'Kairos',
      description: 'A web application to study with your friends',
      slug: 'kairos',
      github: {
        url: 'https://github.com/Homie-s-Project/kairos',
        name: 'kairos',
        org: 'Homie-s-Project'
      },
      inUse: false,
      inProgress: false,
      technologies: [
        Technology.Angular,
        Technology.CSharp,
        Technology.Docker,
        Technology.PostgreSQL,
        Technology.Grafana,
        Technology.Redis,
      ]
    },
    {
      img: '',
      title: 'Twitter ISS',
      description: 'Every 30 minutes, a tweet is posted with the current position of the ISS and a picture of the location with the forecast weather',
      slug: 'twitter-iss-image',
      website: 'https://x.com/@whereisiss',
      inUse: false,
      inProgress: false,
      technologies: [
        Technology.NodeJS,
        Technology.Docker,
        Technology.Git,
        Technology.TwitterAPI,
      ]
    },
    {
      img: '',
      title: 'GeoGuessr Cheat',
      description: 'An extension to cheat on GeoGuessr, just need to click on the map and the extension will find the right location for you',
      slug: 'geoguessr-cheat',
      github: {
        url: 'https://github.com/RomainAntunes/geoguessr-cheat',
        name: 'geoguessr-cheat',
      },
      inUse: false,
      inProgress: false,
      technologies: [
        Technology.JavaScript,
        Technology.Git,
      ]
    },
    {
      img: '',
      title: 'FiveM Bodycam',
      description: 'A web application to create a bodycam overlay for FiveM streamers',
      slug: 'fivem-bodycam',
      github: {
        url: 'https://github.com/RomainAntunes/fivem-bodycam-overlay',
        name: 'fivem-bodycam-overlay'
      },
      inUse: false,
      inProgress: false,
      technologies: [
        Technology.Lua,
        Technology.FiveM,
        Technology.Git,
      ]
    },
  ]

  constructor(
    private readonly http: HttpClient
  ) {
  }

  getProjects() {
    return this.projects;
  }

  findProjectByName(title: string) {
    return this.projects.find(project => project.slug === title);
  }
}
