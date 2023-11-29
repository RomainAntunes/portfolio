import {Component} from '@angular/core';
import {Social} from "./models/social";

@Component({
  selector: 'app-personnal',
  templateUrl: './personnal.component.html',
  styleUrls: ['./personnal.component.scss']
})
export class PersonnalComponent {

  currentJob: string = 'Apprenti - Développement d\'application';
  currentJobStartDate: string = 'August 2020';
  available: boolean = true;

  socials: Social[] = [
    {
      name: 'LinkedIn',
      link: 'https://linkedin.com/in/romainantunes',
      icon: 'ionLogoLinkedin'
    },
    {
      name: 'GitHub',
      link: 'https://github.com/romainantunes',
      icon: 'ionLogoGithub'
    },
    {
      name: 'CodinGame',
      link: 'https://www.codingame.com/profile/defc3ee5279aecc1bb6114e1f994ea9b3325423',
      icon: 'ionCodeSlash',
      tooltip: 'Top 0.2% Worldwide'
    },
    {
      name: 'Mail',
      link: 'mailto:romain.antunes@proton.me',
      icon: 'ionMailOutline'
    }
  ];
}
