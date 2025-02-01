import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-vue',
  standalone: true,
imports: [SidebarComponent],
  templateUrl: './vue.component.html',
  styleUrl: './vue.component.scss'
})
export class VueComponent {

}
