import { Routes } from '@angular/router';
import { AngularComponent } from './angular.component';
import { ApiCallsComponent } from './api-calls/api-calls.component';
// import { ComponentsComponent } from './components/components.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventEmitterComponent } from './event-emitter/event-emitter.component';
import { FormsComponent } from './forms/forms.component';
import { ParentChildCommunicationComponent } from './parent-child-communication/parent-child-communication.component';
import { PerformanceOptimizationComponent } from './performance-optimization/performance-optimization.component';
import { PipesComponent } from './pipes/pipes.component';
import { RoutingComponent } from './routing/routing.component';
import { SecurityAndAuthComponent } from './security-and-auth/security-and-auth.component';
import { ServicesAndDiComponent } from './services-and-di/services-and-di.component';
import { StateManagementComponent } from './state-management/state-management.component';
import { TemplateAndViewsComponent } from './template-and-views/template-and-views.component';
import { ViewchildContentchildComponent } from './viewchild-contentchild/viewchild-contentchild.component';
import { IntroToAngularComponent } from './intro-to-angular/intro-to-angular.component';

export const ANGULAR_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'intro' },
  { path: 'intro', component: IntroToAngularComponent },
  { path: 'api-call', component: ApiCallsComponent },
  
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'event-emitter', component: EventEmitterComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'parent-child-communication', component: ParentChildCommunicationComponent },
  { path: 'performance-opt', component: PerformanceOptimizationComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'routing', component: RoutingComponent },
  { path: 'security-auth', component: SecurityAndAuthComponent },
  { path: 'services-and-di', component: ServicesAndDiComponent },
  { path: 'state-management', component: StateManagementComponent },
  { path: 'templates-and-views', component: TemplateAndViewsComponent },
  { path: 'viewchild-and-contentchild', component: ViewchildContentchildComponent },
  
];
