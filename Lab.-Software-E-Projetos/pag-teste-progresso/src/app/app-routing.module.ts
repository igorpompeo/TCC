import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'bar-chart', component: MyBarChartComponent },
  { path: 'line-chart', component: MyLineChartComponent },
  { path: 'pie-chart', component: MyPieChartComponent },
  { path: '**', component: MyLineChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
