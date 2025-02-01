import { Routes } from '@angular/router';
import { DockerComponent } from './docker.component';


export const Docker_ROUTES: Routes = [
  { path: '', component: DockerComponent },
  { path: 'intro', component: DockerComponent }, // Example sub-route
  { path: 'advanced', component: DockerComponent } // Example sub-route
];
