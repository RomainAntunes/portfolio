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
      icon: 'fab fa-linkedin-in'
    },
    {
      name: 'GitHub',
      link: 'https://github.com/romainantunes'
    }
  ];
}
