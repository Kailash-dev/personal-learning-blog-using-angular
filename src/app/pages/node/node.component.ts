import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-node',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './node.component.html',
  styleUrl: './node.component.scss'
})
export class NodeComponent {

}
