import {Injectable} from '@angular/core';
import {Project} from "../pages/projects/models/project";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects: Project[] = [
    {
      "slug": "project-1",
      "name": "Inventory Management System",
      "description": "Developing a system to manage and track inventory across multiple locations.",
      "image": "https://picsum.photos/260/200",
      "links": [
        {
          "name": "GitHub Repository",
          "url": "https://github.com/inventory-management"
        },
        {
          "name": "Demo",
          "url": "https://demo.inventorymanagement.com"
        }
      ],
      "technologies": [
        {
          "name": "React"
        },
        {
          "name": "Node.js"
        },
        {
          "name": "MongoDB"
        }
      ],
      "date": "2023-03-15",
      "in_progress": true
    },
    {
      "slug": "project-2",
      "name": "E-Learning Platform",
      "description": "Building an online platform for interactive e-learning experiences.",
      "image": "https://picsum.photos/260/200",
      "links": [
        {
          "name": "GitHub Repository",
          "url": "https://github.com/elearning-platform"
        },
        {
          "name": "Demo",
          "url": "https://demo.elearningplatform.com"
        }
      ],
      "technologies": [
        {
          "name": "Angular"
        },
        {
          "name": "Firebase"
        }
      ],
      "date": "2023-04-20",
      "in_progress": false
    },
    {
      "slug": "project-3",
      "name": "Weather App",
      "description": "Creating a weather application to provide real-time weather information.",
      "image": "https://picsum.photos/260/200",
      "in_progress": true
    },
    {
      "slug": "project-4",
      "name": "Expense Tracker",
      "description": "Designing a tool to help users track and manage their expenses effectively.",
      "image": "https://picsum.photos/260/200",
      "links": [
        {
          "name": "GitHub Repository",
          "url": "https://github.com/expense-tracker"
        }
      ],
      "technologies": [
        {
          "name": "Vue.js"
        },
        {
          "name": "Express"
        },
        {
          "name": "SQLite"
        }
      ],
      "date": "2023-02-10",
      "in_progress": false
    },
    {
      "slug": "project-5",
      "name": "Social Media Dashboard",
      "description": "Developing a dashboard for monitoring and managing social media accounts.",
      "image": "https://picsum.photos/260/200",
      "in_progress": true
    },
    {
      "slug": "project-6",
      "name": "Health and Fitness App",
      "description": "Building an application to track and analyze health and fitness data.",
      "image": "https://picsum.photos/260/200",
      "date": "2023-05-25",
      "in_progress": false
    },
    {
      "slug": "project-7",
      "name": "Event Management System",
      "description": "Creating a comprehensive system for planning and managing events.",
      "image": "https://picsum.photos/260/200",
      "in_progress": true
    },
    {
      "slug": "project-8",
      "name": "Task Automation Tool",
      "description": "Designing a tool to automate repetitive tasks and streamline workflows.",
      "image": "https://picsum.photos/260/200",
      "links": [
        {
          "name": "GitHub Repository",
          "url": "https://github.com/task-automation"
        }
      ],
      "technologies": [
        {
          "name": "Python"
        },
        {
          "name": "Django"
        }
      ],
      "date": "2023-03-01",
      "in_progress": false
    },
    {
      "slug": "project-9",
      "name": "Online Marketplace",
      "description": "Developing a platform for buying and selling goods and services online.",
      "image": "https://picsum.photos/260/200",
      "in_progress": true
    },
    {
      "slug": "project-10",
      "name": "Language Learning App",
      "description": "Building an app to help users learn new languages through interactive lessons.",
      "image": "https://picsum.photos/260/200",
      "date": "2023-06-12",
      "in_progress": true
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
