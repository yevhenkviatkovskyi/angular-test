import { Routes } from '@angular/router';
import {ChartComponent} from './chart/chart.component';
import {TestingComponent} from "./testing/testing.component";
import {ApexchartsComponent} from "./apexcharts/apexcharts.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  { path: 'charts', title: 'Charts', component: ChartComponent },
  { path: 'apexcharts', title: 'Apexcharts', component: ApexchartsComponent },
  { path: 'testing', title: 'Testing', component: TestingComponent },
  { path: 'login', title: 'Login', component: LoginComponent },
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
