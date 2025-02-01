import { Routes } from '@angular/router';
import { ReactComponent } from './react.component';


export const React_ROUTES: Routes = [
  { path: '', component: ReactComponent },
  { path: 'intro', component: ReactComponent }, // Example sub-route
  { path: 'advanced', component: ReactComponent } // Example sub-route
];
