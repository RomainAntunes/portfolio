import {Component, OnInit} from '@angular/core';
import {DarkmodeService} from "../../services/darkmode.service";
import {Observable, tap} from "rxjs";
import {DarkModeState, DarkModeStateMapping} from "../../models/darkModeState";
import {PermissionsService} from "../../services/permissions.service";
import {GithubService} from "../../services/github.service";
import {Tags} from "../../models/tags";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public DarkModeStateMapping = DarkModeStateMapping;

  darkMode$!: Observable<DarkModeState>;
  darkModeState = Object.values(DarkModeState);
  isMobile: boolean = this.permissionService.isMobile;
  version$ = new Observable<Tags>();

  constructor(
    private readonly darkModeService: DarkmodeService,
    private readonly permissionService: PermissionsService,
    private readonly githubService: GithubService
  ) {
  }

  ngOnInit(): void {
    this.darkMode$ = this.darkModeService.followDarkModeState$();

    this.version$ = this.githubService.getLatestVersion({
      url: 'https://github.com/RomainAntunes/portfolio',
      name: 'portfolio',
      org: 'RomainAntunes'
    });
  }

  protected readonly DarkModeState = DarkModeState;

  onChange(value: DarkModeState) {
    this.darkModeService.setDarkMode(value);
  }

  resetPermission() {
    this.permissionService.resetPermission();
  }
}
