import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-git',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './git.component.html',
  styleUrl: './git.component.scss'
})
export class GitComponent {

}
