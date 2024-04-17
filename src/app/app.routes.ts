import { Routes } from '@angular/router';
import {ChartComponent} from './chart/chart.component';
import {TestingComponent} from "./testing/testing.component";
import {ApexchartsComponent} from "./apexcharts/apexcharts.component";
import {GoogleComponent} from "./google/google.component";

export const routes: Routes = [
  { path: 'charts', title: 'Charts', component: ChartComponent },
  { path: 'apexcharts', title: 'Apexcharts', component: ApexchartsComponent },
  { path: 'google', title: 'google', component: GoogleComponent },
  { path: 'testing', title: 'Testing', component: TestingComponent },
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page

];
