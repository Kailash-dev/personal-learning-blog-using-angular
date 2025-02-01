import { Component } from '@angular/core';

import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tech-layout',
  standalone: true,
  imports: [SidebarComponent,RouterOutlet],
  templateUrl: './tech-layout.component.html',
  styleUrl: './tech-layout.component.scss'
})
export class TechLayoutComponent {

}
