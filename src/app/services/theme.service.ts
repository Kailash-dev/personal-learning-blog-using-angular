import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkTheme = false;

  constructor() { }

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
    this.updateTheme();
  }

  private updateTheme() {
    if (this.darkTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      // Optionally change the stylesheet for dark theme
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'src/styles/dark-theme.scss';
      document.head.appendChild(link);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      // Optionally change the stylesheet for light theme
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'src/styles/light-theme.scss';
      document.head.appendChild(link);
    }
  }
}
