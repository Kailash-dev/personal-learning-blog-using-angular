import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor,NgIf,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(private router: Router) {}

  technologies = [
    {
      name: 'Angular',
      route: 'angular',
      concepts: ['Data Binding', 'Forms Handling', 'API Calls', 'Routing', 'State Management']
    },
    {
      name: 'React',
      route: 'react',
      concepts: ['Components', 'Props & State', 'Hooks', 'Context API', 'Redux']
    },
    {
      name: 'Docker',
      route: 'docker',
      concepts: ['Containers', 'Docker Compose', 'Volumes', 'Networking']
    },
    {
      name: 'Vue',
      route: 'vue',
      concepts: ['Directives', 'Vuex', 'Composition API', 'Lifecycle Hooks']
    },
    {
      name: 'Git',
      route: 'git',
      concepts: ['Branching', 'Merging', 'Rebasing', 'Conflict Resolution']
    }
  ];

  selectedTech: string | null = null;
  selectedConcept: string | null = null;

  toggleAccordion(tech: any) {
    this.selectedTech = this.selectedTech === tech.name ? null : tech.name;
  }

  selectConcept(tech: any, concept: string) {
    this.selectedConcept = concept;
    this.router.navigate([`/tech/${tech.route}`, { concept: concept.toLowerCase().replace(/ /g, '-') }]);
  }
}
