import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SidebarService } from './services/sidebar.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent, SidebarComponent ,MatToolbarModule,MatIconModule,MatButtonModule  , MatSidenavModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'personal-learning-blog';
  activeTheme = true;
  showFiller = false;
  constructor(private sidebarService: SidebarService) {}
  toggleSidebar() {
    console.log('click')
    this.sidebarService.toggleSidebar();
  }
}
