import { Routes } from '@angular/router';
import { VueComponent } from './vue.component';


export const Vue_ROUTES: Routes = [
  { path: '', component: VueComponent },
  { path: 'intro', component: VueComponent }, // Example sub-route
  { path: 'advanced', component: VueComponent } // Example sub-route
];
