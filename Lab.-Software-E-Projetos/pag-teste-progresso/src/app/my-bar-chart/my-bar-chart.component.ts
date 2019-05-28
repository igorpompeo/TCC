import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {

  public barChartOption = {
    scaleShowVerticalLines: false,
    responsive: true
  };
 
  public barChartLabels = ["1º Semestre", "2º Semestre", "3º Semestre", "4º Semestre", "5º Semestre", "6º Semestre", "7º Semestre", "8º Semestre"];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55,40,55], 
    label: 'Especifica'},
    {data: [28, 48, 40, 19, 86, 27, 90,87], 
    label: 'Geral'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
