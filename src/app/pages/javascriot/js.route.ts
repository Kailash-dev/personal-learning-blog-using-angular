import { Routes } from '@angular/router';
import { JavascriptComponent } from './javascript.component';


export const Javascript_ROUTES: Routes = [
  { path: '', component: JavascriptComponent },
  { path: 'intro', component: JavascriptComponent }, // Example sub-route
  { path: 'advanced', component: JavascriptComponent } // Example sub-route
];
