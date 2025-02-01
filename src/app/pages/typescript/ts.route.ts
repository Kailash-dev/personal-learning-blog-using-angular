import { Routes } from '@angular/router';
import { TypescriptComponent } from './typescript.component';


export const Typescript_ROUTES: Routes = [
  { path: '', component: TypescriptComponent },
  { path: 'intro', component: TypescriptComponent }, // Example sub-route
  { path: 'advanced', component: TypescriptComponent } // Example sub-route
];
