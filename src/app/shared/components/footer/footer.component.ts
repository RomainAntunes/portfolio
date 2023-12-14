import {Component, OnInit} from '@angular/core';
import {DarkmodeService} from "../../services/darkmode.service";
import {Observable} from "rxjs";
import {DarkModeState, DarkModeStateMapping} from "../../models/darkModeState";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public DarkModeStateMapping = DarkModeStateMapping;

  darkMode$!: Observable<DarkModeState>;
  darkModeState = Object.values(DarkModeState);

  constructor(
    private readonly darkModeService: DarkmodeService
  ) {
  }

  ngOnInit(): void {
    this.darkMode$ = this.darkModeService.followDarkModeState$();
  }

  protected readonly DarkModeState = DarkModeState;

  onChange(value: DarkModeState) {
    this.darkModeService.setDarkMode(value);
  }
}
