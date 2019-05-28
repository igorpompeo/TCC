import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css']
})

export class MyLineChartComponent implements OnInit {

public lineChartOption = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public lineChartLabels = ["1º Semestre", "2º Semestre", "3º Semestre", "4º Semestre", "5º Semestre", "6º Semestre", "7º Semestre", "8º Semestre"];
  public lineChartType = 'line';
  public lineChartLegend = true;

  public lineChartData = [
    {
      data: [8, 7.5, 5, 9, 4.6, 3.6, 5, 6],
      borderWidth: 6,
      label: 'Nota'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
