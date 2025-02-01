import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AngularComponent } from "./pages/angular/angular.component";
import { ReactComponent } from "./pages/react/react.component";
import { VueComponent } from "./pages/vue/vue.component";
import { DockerComponent } from "./pages/docker/docker.component";
import { GitComponent } from "./pages/git/git.component";
import { FabricJsComponent } from "./pages/fabric.js/fabric.js.component";
import { TypescriptComponent } from "./pages/typescript/typescript.component";
import { JavascriptComponent } from "./pages/javascriot/javascript.component";
import { NodeComponent } from "./pages/node/node.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },

  { path: "dashboard", component: DashboardComponent },
  
  {
    path: "angular",
    loadChildren: () =>
      import("./pages/angular/angular.routes").then((m) => m.ANGULAR_ROUTES),
  },
  {
    path: "react",
    loadChildren: () =>
      import("./pages/react/react.route").then((m) => m.React_ROUTES),
  },
  {
    path: "vue",
    loadChildren: () =>
      import("./pages/vue/vue.route").then((m) => m.Vue_ROUTES),
  },
  {
    path: "docker",
    loadChildren: () =>
      import("./pages/docker/docker.route").then((m) => m.Docker_ROUTES),
  },
  {
    path: "git",
    loadChildren: () =>
      import("./pages/git/git.route").then((m) => m.Git_ROUTES),
  },
  {
    path: "fabric",
    loadChildren: () =>
      import("./pages/fabric.js/fabric.route").then((m) => m.Fabric_ROUTES),
  },
  {
    path: "typescript",
    loadChildren: () =>
      import("./pages/typescript/ts.route").then(
        (m) => m.Typescript_ROUTES
      ),
  },
  {
    path: "javascript",
    loadChildren: () =>
      import("./pages/javascriot/js.route").then(
        (m) => m.Javascript_ROUTES
      ),
  },
  {
    path: "node",
    loadChildren: () =>
      import("./pages/node/node.route").then((m) => m.Node_ROUTES),
  },
];
