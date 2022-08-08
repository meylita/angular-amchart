import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BarChartComponent } from './pages/bar-chart/bar-chart.component';
import { PieComponent } from './pages/pie/pie.component';
import { HalfPieComponent } from './pages/half-pie/half-pie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarChartComponent,
    PieComponent,
    HalfPieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
