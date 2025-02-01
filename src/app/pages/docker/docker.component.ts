import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-docker',
  standalone: true,
imports: [SidebarComponent],
  templateUrl: './docker.component.html',
  styleUrl: './docker.component.scss'
})
export class DockerComponent {

}
