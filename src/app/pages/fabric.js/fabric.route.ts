import { Routes } from '@angular/router';
import { FabricJsComponent } from './fabric.js.component';


export const Fabric_ROUTES: Routes = [
  { path: '', component: FabricJsComponent },
  { path: 'intro', component: FabricJsComponent }, // Example sub-route
  { path: 'advanced', component: FabricJsComponent } // Example sub-route
];
