import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {DarkModeState} from "../models/darkModeState";

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {

  darkMode: DarkModeState = DarkModeState.SYSTEM;
  darkModeBehaviourSubject$ = new BehaviorSubject<DarkModeState>(this.darkMode);

  constructor() {
  }

  followDarkModeState$() {
    return this.darkModeBehaviourSubject$.asObservable();
  }

  loadDarkMode() {
    if (this.hasSavedDarkMode()) {
      const stateLoaded: string = localStorage.getItem('darkMode') ?? DarkModeState.SYSTEM.valueOf();
      this.darkMode = DarkModeState[stateLoaded as unknown as keyof typeof DarkModeState];
      this.darkModeBehaviourSubject$.next(this.darkMode);
    }

    if (this.darkMode === DarkModeState.SYSTEM) {
      this.isSystemDarkMode();
    }

    this.updateHtmlClass();
  }

  setDarkMode(value: DarkModeState) {
    this.darkMode = value;
    this.darkModeBehaviourSubject$.next(value);

    this.saveDarkMode();
    this.updateHtmlClass();
  }

  private saveDarkMode() {
    localStorage.setItem('darkMode', this.darkMode.valueOf().toUpperCase());
  }

  private hasSavedDarkMode() {
    return localStorage.getItem('darkMode') !== null;
  }

  private updateHtmlClass() {
    // Check system dark mode
    if (this.darkMode === DarkModeState.SYSTEM) {
      if (this.isSystemDarkMode()) {
        this.darkMode = DarkModeState.DARK;
      } else {
        this.darkMode = DarkModeState.LIGHT;
      }
    }

    const htmlElement = document.getElementsByTagName('html')[0];
    if (this.darkMode === DarkModeState.DARK) {
      htmlElement.classList.add('dark');
      htmlElement.style.colorScheme = 'dark';
    } else {
      htmlElement.classList.remove('dark');
      htmlElement.style.colorScheme = 'light';
    }
  }

  private isSystemDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}
