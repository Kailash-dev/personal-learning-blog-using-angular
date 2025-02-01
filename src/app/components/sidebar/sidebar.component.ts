import { CommonModule, NgFor, NgIf } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SidebarService } from "../../services/sidebar.service";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [NgFor, NgIf, CommonModule, MatExpansionModule, MatIconModule],
  templateUrl: "./sidebar.component.html",
  styleUrl: "./sidebar.component.scss",
})
export class SidebarComponent implements OnInit {
  isSidebarOpen = false;
  currentTech: string | null = null;
  constructor(
    private router: Router,
    private sidebarService: SidebarService,
    private activatedRoute: ActivatedRoute
  ) {}
  currentSelectedTech: any;
  technologies = [
    {
      name: "Angular",
      route: "angular",
      concepts: [
         { name:"Introduction", route: '/angular/intro', },
         { name:"Api-calls", route: '/angular/api-call', },
         { name:"Component", route: '/angular/component', },
         { name:"Data-Binding", route: '/angular/data-binding', },
         { name:"Directive", route: '/angular/directives',  },
         { name:"Event-Emitter", route: '/angular/event-emitter', },
         { name:"Forms", route: '/angular/forms',  },
         { name:"Parent & Child Communication", route: '/angular/parent-child-communication',  },
         { name:"Permonance", route: '/angular/performance-opt', },
         { name:"Pipes", route: '/angular/pipes',  },
         { name:"Routing", route: '/angular/routing', },
         { name:"Security", route: '/angular/security-auth', },
         { name:"DI", route: '/angular/services-and-di',  },
         { name:"Statemanagement", route: '/angular/state-management',  },
         { name:"Templates & Views", route: '/angular/templates-and-views',  },
         { name:"ViewChild & ContentChild", route: '/angular/viewchild-and-contentchild',  },
  
       
      ],
    },
    // {
    //   name: "Docker",
    //   route: "docker",
    //   concepts: ["Containers", "Docker Compose", "Volumes", "Networking"],
    // },
    // {
    //   name: "Fabric.js",
    //   route: "fabric",
    //   concepts: ["Containers", "Docker Compose", "Volumes", "Networking"],
    // },
    // {
    //   name: "Git",
    //   route: "git",
    //   concepts: ["Branching", "Merging", "Rebasing", "Conflict Resolution"],
    // },
    // {
    //   name: "Javascript",
    //   route: "javascript",
    //   concepts: ["Containers", "Docker Compose", "Volumes", "Networking"],
    // },
    // {
    //   name: "Node",
    //   route: "node",
    //   concepts: ["Containers", "Docker Compose", "Volumes", "Networking"],
    // },

    // {
    //   name: "React",
    //   route: "react",
    //   concepts: [
    //     "Components",
    //     "Props & State",
    //     "Hooks",
    //     "Context API",
    //     "Redux",
    //   ],
    // },
    // {
    //   name: "Typescript",
    //   route: "typescript",
    //   concepts: ["Containers", "Docker Compose", "Volumes", "Networking"],
    // },

    // {
    //   name: "Vue",
    //   route: "vue",
    //   concepts: ["Directives", "Vuex", "Composition API", "Lifecycle Hooks"],
    // },
  ];

  selectedTech: string | null = null;
  selectedConcept: string | null = null;

  ngOnInit() {
    this.sidebarService.sidebarOpen$.subscribe((open) => {
      this.isSidebarOpen = open;
    });
    this.activatedRoute.url.subscribe((urlSegments) => {
      this.currentSelectedTech = urlSegments[0]?.path; // "angular" in this case
      console.log("Extracted tech stack:", this.currentSelectedTech);
    });
  }

  toggleAccordion(tech: any) {
    this.selectedTech = this.selectedTech === tech.name ? null : tech.name;
  }

  selectConcept(tech: any, concept: string) {
    this.selectedConcept = concept;
    this.router.navigate([
      `/tech/${tech.route}`,
      { concept: concept.toLowerCase().replace(/ /g, "-") },
    ]);
  }

  selectTech(tech: any) {
    this.selectedTech = tech; // Set selected technology when a tech card is clicked
  }

  onTechClick(tech: any) {
    console.log("tech", tech);
    // this.router.navigate([`${tech.route}`]);
    this.router.navigate([`${tech.route}`]);
  }
}
