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
    },
    {
      slug: 'pomodoro',
      name: 'Pomodoro',
      description: 'Pomodoro is a web application that allows you to manage your time.\n\n' +
        'You can create a timer with the time you set yourself to revise.\n\n' +
        'The application will inform you when to take a break and give you some tips/ tricks when the breaks are done.',
      image: 'assets/screenshots/pomodoro.jpeg',
      in_progress: true,
      links: [
        {
          name: 'Pomodoro Website',
          url: 'https://pomodoro.romainantunes.dev'
        },
        {
          name: 'Pomodoro Github',
          url: 'https://github.com/romainantunes/pomodoro'
        }
      ],
      technologies: [
        Technologies.Angular,
        Technologies.Node,
        Technologies.GIT,
        Technologies.TailwindCSS,
      ]
    },
    {
      slug: 'mercure',
      name: 'Mercure',
      description: 'Mercure is a web application that allows you to manage your customers, your products and your orders.\n\n' +
        'You can also manage your stock and your suppliers.\n\n' +
        'Mercure is a project that I developed during a school project.\n\n' +
        'All the code is available and documents can be downloaded in the Releases page.',
      image: undefined,
      in_progress: false,
      links: [
        {
          name: 'Mercure Github',
          url: 'https://github.com/Homie-s-Project/mercure'
        },
        {
          name: 'Mercure Releases',
          url: 'https://github.com/Homie-s-Project/mercure/releases'
        }
      ],
      technologies: [
        Technologies.Angular,
        Technologies.CSharp,
        Technologies.DotNet,
        Technologies.Docker,
        Technologies.PostgreSQL,
        Technologies.Grafana,
        Technologies.Redis,
      ]
    },
    {
      slug: 'kairos',
      name: 'Kairos',
      description: 'kairos is a WEB application mainly that could also be developed later to become available on mobile.\n\n' +
        'Its purpose is to help people who have difficulty getting started with revisions and staying focused.\n\n' +
        'You will be able to launch a timer with the time you set yourself to revise. The application will inform you when to take a break and give you some tips/ tricks when the breaks are done. ',
      image: undefined,
      in_progress: false,
      links: [
        {
          name: 'Kairos Github',
          url: 'https://github.com/Homie-s-Project/kairos'
        },
        {
          name: 'Kairos Releases',
          url: 'https://github.com/Homie-s-Project/kairos/releases'
        }
      ],
      technologies: [
        Technologies.Angular,
        Technologies.CSharp,
        Technologies.DotNet,
        Technologies.Docker,
        Technologies.PostgreSQL,
        Technologies.Grafana,
        Technologies.Redis,
      ]
    },
    {
      slug: 'twitter-image-api',
      name: 'Twitter Image ISS',
      description: 'I have developed a bot that posts a picture of where the International Space Station is located every 30 minutes and it also posted the forecast of where was the ISS.',
      image: undefined,
      in_progress: false,
      links: [
        {
          name: 'Twitter Image ISS Twitter',
          url: 'https://x.com/@whereisiss'
        }
      ],
      technologies: [
        Technologies.Node,
        Technologies.Express,
        Technologies.TwitterAPI,
        Technologies.Docker,
        Technologies.GIT,
      ]
    },
    {
      slug: 'geoguessr-cheat',
      name: 'GeoGuessr Cheat',
      description: 'GeoGuessr is a geography game which takes you on a journey around the world and challenges your ability to recognize your surroundings.\n\n' +
        'I have developed a cheat for GeoGuessr.',
      image: undefined,
      in_progress: false,
      links: [
        {
          name: 'GeoGuessr Cheat Github',
          url: 'https://github.com/RomainAntunes/geoguessr-cheat'
        }
      ],
      technologies: [
        Technologies.JavaScript,
        Technologies.GIT,
      ]
    },
    {
      slug: 'fivem-bodycam',
      name: 'FiveM Bodycam',
      description: 'FiveM is a modification for Grand Theft Auto V enabling you to play multiplayer on customized dedicated servers.\n\n' +
        'I have developed a bodycam for FiveM.',
      image: undefined,
      in_progress: false,
      links: [
        {
          name: 'FiveM Bodycam Github',
          url: 'https://github.com/RomainAntunes/fivem-bodycam-overlay'
        }
      ],
      technologies: [
        Technologies.Lua,
        Technologies.FiveM,
        Technologies.GIT,
      ]
    },
    {
      slug: 'manager-discord',
      name: 'Manager Discord',
      description: 'Manager Discord is a Discord bot that allows you to manage your server.\n\n' +
        'You can create a ticket system, a moderation system, a leveling system and much more.',
      image: undefined,
      in_progress: false,
      technologies: [
        Technologies.Node,
        Technologies.Discord,
        Technologies.DiscordAPI,
        Technologies.MongoDB,
        Technologies.Docker,
        Technologies.GIT,
        Technologies.Express,
        Technologies.OAuth2,
        Technologies.Redis,
      ]
    },
    {
      slug: 'fivem-scripts',
      name: 'FiveM Scripts',
      description: 'FiveM is a modification for Grand Theft Auto V enabling you to play multiplayer on customized dedicated servers.\n\n' +
        'I have developed several scripts for FiveM.',
      image: undefined,
      in_progress: false,
      technologies: [
        Technologies.Lua,
        Technologies.FiveM,
        Technologies.GIT,
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
