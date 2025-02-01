import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-react',
  standalone: true,
 imports: [SidebarComponent],
  templateUrl: './react.component.html',
  styleUrl: './react.component.scss'
})
export class ReactComponent {

}
