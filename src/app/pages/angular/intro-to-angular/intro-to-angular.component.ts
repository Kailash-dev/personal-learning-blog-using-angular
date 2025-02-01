import { NgFor } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-intro-to-angular',
  standalone: true,
  imports: [NgFor],
  templateUrl: './intro-to-angular.component.html',
  styleUrl: './intro-to-angular.component.scss'
})
export class IntroToAngularComponent {
  pros = [
    'Full-fledged framework: Comes with routing, state management, forms, etc.',
    'Enterprise-grade: Preferred by banks, healthcare, and large-scale applications.',
    'Strong maintainability: TypeScript ensures better code quality and scalability.',
    'Security-first approach: Built-in protection against XSS attacks.',
    'Google-backed: Long-term support and improvements from the Angular team.',
  ];

  cons = [
    'Steep learning curve: More complex than React or Vue.',
    'Heavy framework: Larger bundle size compared to React and Vue.',
    'Opinionated structure: Less flexibility compared to React’s component-based architecture.',
  ];

  industryUseCases = [
    { company: 'Google', details: 'Uses Angular for Google Ads & Cloud.' },
    { company: 'Microsoft', details: 'Employs Angular for internal enterprise tools.' },
    { company: 'IBM', details: 'Develops AI & analytics dashboards with Angular.' },
    { company: 'Forbes', details: 'Built its content management system with Angular.' },
  ];

  faq = [
    { question: 'Is Angular better than React?', answer: 'It depends on the use case. Angular is better for large-scale applications, while React offers more flexibility and performance in UI-heavy apps.' },
    { question: 'Is Angular still relevant in 2024?', answer: 'Absolutely! Many enterprises rely on Angular for its stability and long-term support from Google.' },
    { question: 'Who should learn Angular?', answer: 'Developers aiming for enterprise-level applications, especially in banking, healthcare, or SaaS.' },
  ];
}
