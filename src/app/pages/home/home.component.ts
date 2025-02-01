import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  technologies = [
    {
      name: "React",
      type: "JavaScript Framework",
      description: "A JavaScript library for building user interfaces, primarily for single-page applications.",
      popularity: "High",
      latestVersion: "18.2.0",
      ecosystem: "React Router, Redux, Next.js"
    },
    {
      name: "Angular",
      type: "JavaScript Framework",
      description: "A platform for building mobile and desktop web applications, maintained by Google.",
      popularity: "High",
      latestVersion: "15.2.0",
      ecosystem: "Angular Material, NgRx, Ionic"
    },
    {
      name: "Vue",
      type: "JavaScript Framework",
      description: "A progressive framework for building user interfaces, often used in single-page applications.",
      popularity: "High",
      latestVersion: "3.3.0",
      ecosystem: "Vuex, Vue Router, Nuxt.js"
    },
    {
      name: "Docker",
      type: "Containerization Platform",
      description: "A tool designed to make it easier to create, deploy, and run applications by using containers.",
      popularity: "High",
      latestVersion: "24.0.0",
      ecosystem: "Docker Compose, Docker Swarm"
    },
    {
      name: "Git",
      type: "Version Control System",
      description: "A distributed version control system to track changes in source code during software development.",
      popularity: "High",
      latestVersion: "2.39.0",
      ecosystem: "GitHub, GitLab, Bitbucket"
    },
    {
      name: "Fabric",
      type: "Canvas Library",
      description: "A JavaScript framework for creating interactive object-oriented canvas applications.",
      popularity: "Medium",
      latestVersion: "4.5.0",
      ecosystem: "Canvas API"
    },
    {
      name: "Node",
      type: "JavaScript Runtime",
      description: "A JavaScript runtime built on Chrome's V8 JavaScript engine for building scalable network applications.",
      popularity: "High",
      latestVersion: "18.15.0",
      ecosystem: "Express.js, NestJS"
    },
    {
      name: "TypeScript",
      type: "Programming Language",
      description: "A superset of JavaScript that adds static types and modern JavaScript features.",
      popularity: "High",
      latestVersion: "4.9.4",
      ecosystem: "Angular, React, Vue"
    },
    {
      name: "JavaScript",
      type: "Programming Language",
      description: "A high-level, just-in-time compiled language used to create dynamic web pages and applications.",
      popularity: "High",
      latestVersion: "ECMAScript 2025",
      ecosystem: "React, Angular, Node.js"
    }
  ];
}
