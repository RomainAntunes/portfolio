import {Component} from '@angular/core';
import {NavItem} from "../../models/NavItem";
import {SocialItem} from "../../models/SocialItem";
import {MessageService} from "../../services/message.service";

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
      route: '/assets/pdf/CV_Romain_Antunes_FR.pdf',
      callback: () => this.messageService.add({
        id: 'resume',
        title: 'Resume',
        content: 'Choose your language',
        smallContent: '* The english version can contain some mistakes, I\'m not a native english speaker',
        buttons: [
          {
            text: 'English',
            link: '/assets/pdf/CV_Romain_Antunes_EN.pdf',
            callback: () => window.open('/assets/pdf/CV_Romain_Antunes_EN.pdf', '_blank')
          },
          {
            text: 'French',
            link: '/assets/pdf/CV_Romain_Antunes_FR.pdf',
            callback: () => window.open('/assets/pdf/CV_Romain_Antunes_FR.pdf', '_blank')
          }
        ]
      }),
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

  constructor(
    private readonly messageService: MessageService
  ) {
  }

  openSpecialCallback(callback: () => void, route: string | undefined) {
    callback();
    // maybe if uer has not given the permission to open other tab, we can open it in the same tab
  }
}
