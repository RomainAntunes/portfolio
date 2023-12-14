import {Component} from '@angular/core';
import {NavItem} from "../../models/NavItem";
import {SocialItem} from "../../models/SocialItem";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  navItems: NavItem[] = [
    {
      name: 'Home',
      route: '/',
      local: false
    },
    {
      name: 'Projects',
      route: '/projects',
      local: false
    },
    {
      name: 'Resume (CV)',
      route: '/assets/pdf/CV_Romain_Antunes.pdf',
      icon: 'heroArrowTopRightOnSquare',
      local: true
    }
  ];

  socialItems: SocialItem[] = [
    {
      icon: 'ionLogoGithub',
      route: 'https://github.com/romainantunes'
    },
    {
      icon: 'ionLogoLinkedin',
      route: 'https://linkedin.com/in/romainantunes'
    },
    {
      icon: 'ionCodeSlash',
      route: 'https://codingame.com/profile/defc3ee5279aecc1bb6114e1f994ea9b3325423'
    },
    {
      icon: 'ionMailOutline',
      route: 'mailto:romain.antunes@proton.me'
    },
  ]
}
