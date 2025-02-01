import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AngularComponent } from './pages/angular/angular.component';
import { ReactComponent } from './pages/react/react.component';
import { VueComponent } from './pages/vue/vue.component';
import { DockerComponent } from './pages/docker/docker.component';
import { GitComponent } from './pages/git/git.component';
import { FabricJsComponent } from './pages/fabric.js/fabric.js.component';
import { TypescriptComponent } from './pages/typescript/typescript.component';
import { JavascriptComponent } from './pages/javascriot/javascript.component';
import { NodeComponent } from './pages/node/node.component';

export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'angular', component: AngularComponent},
    {path: 'react', component: ReactComponent},
    {path: 'vue', component: VueComponent},
    {path: 'docker', component: DockerComponent},
    {path: 'git', component: GitComponent},
    {path: 'fabric', component: FabricJsComponent},
    {path: 'typscript', component: TypescriptComponent},
    {path: 'javascript', component: JavascriptComponent},
   
    {path: 'node', component: NodeComponent},

];
