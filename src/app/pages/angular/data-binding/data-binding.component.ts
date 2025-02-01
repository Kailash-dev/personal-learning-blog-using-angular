import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  title = 'Data Binding in Angular: How It Powers Dynamic Web Applications';
  expression = 'Hello, Angular!';
  industryUseCases = [
    { company: 'Google', details: 'Uses Angular for internal tools and large-scale applications.' },
    { company: 'Microsoft', details: 'Adopts Angular for enterprise solutions and web-based services.' },
    { company: 'Adobe', details: 'Leverages Angular in building dynamic and performant digital experiences.' }
  ];
  
  faq = [
    { question: 'What is data binding in Angular?', answer: 'Data binding in Angular is the automatic synchronization of data between the component and the view.' },
    { question: 'What types of data binding are there in Angular?', answer: 'Angular supports Interpolation, Property Binding, Event Binding, and Two-way Binding.' },
    { question: 'How does two-way data binding work in Angular?', answer: 'Two-way binding combines property binding and event binding, ensuring the model and view are always in sync.' }
  ];

  pros = [
    'Simplicity of synchronizing data between component and view.',
    'Automatic updates of the view on data changes.',
    'Declarative syntax makes the UI logic clean and easy to manage.'
  ];

  cons = [
    'Two-way binding can cause performance issues in large applications.',
    'Complexity increases as the application grows with more binding scenarios.'
  ];
}
