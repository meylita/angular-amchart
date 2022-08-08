import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './pages/bar-chart/bar-chart.component';
import { HomeComponent } from './pages/home/home.component';
import { PieComponent } from './pages/pie/pie.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'line',
    component: HomeComponent
  },
  {
    path: 'bar',
    component: BarChartComponent
  },
  {
    path: 'pie',
    component: PieComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
