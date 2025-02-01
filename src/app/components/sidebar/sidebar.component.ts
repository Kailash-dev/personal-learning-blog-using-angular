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
         { name:"Introduction", route: 'intro', },
         { name:"Api-calls", route: 'api-call', },
         { name:"Component", route: 'component', },
         { name:"Data-Binding", route: 'data-binding', },
         { name:"Directive", route: 'directives',  },
         { name:"Event-Emitter", route: 'event-emitter', },
         { name:"Forms", route: 'forms',  },
         { name:"Parent & Child Communication", route: 'parent-child-communication',  },
         { name:"Permonance", route: 'performance-opt', },
         { name:"Pipes", route: 'pipes',  },
         { name:"Routing", route: 'routing', },
         { name:"Security", route: 'security-auth', },
         { name:"DI", route: 'services-and-di',  },
         { name:"Statemanagement", route: 'state-management',  },
         { name:"Templates & Views", route: 'templates-and-views',  },
         { name:"ViewChild & ContentChild", route: 'viewchild-and-contentchild',  },
         { name:"Component", route: 'component', }
       
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
    this.activatedRoute.url.subscribe(urlSegments => {
      if (urlSegments.length > 0) {
        this.currentTech = urlSegments[0].path; // "angular" from "/angular/intro"
      }
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
    console.log(`/${this.currentTech}${tech.route}`)
    // this.router.navigate([`/${this.currentTech}${tech.route}`]);
    this.router.navigate([`/${this.currentTech}${tech.route}`], { fragment: '' });
  }
}
