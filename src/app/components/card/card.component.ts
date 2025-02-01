import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() tech: any

  constructor(private router: Router) {}

  navigateToTech(name: string) {
    const techName = name.toLowerCase(); // Convert to lowercase
    this.router.navigate([`${techName}`]); // Navigate to route
  }
}
