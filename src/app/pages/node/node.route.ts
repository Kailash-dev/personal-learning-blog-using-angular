import { Routes } from '@angular/router';
import { NodeComponent } from './node.component';


export const Node_ROUTES: Routes = [
  { path: '', component: NodeComponent },
  { path: 'intro', component: NodeComponent }, // Example sub-route
  { path: 'advanced', component: NodeComponent } // Example sub-route
];
