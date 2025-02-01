import { Routes } from '@angular/router';
import { GitComponent } from './git.component';


export const Git_ROUTES: Routes = [
  { path: '', component: GitComponent },
  { path: 'intro', component: GitComponent }, // Example sub-route
  { path: 'advanced', component: GitComponent } // Example sub-route
];
