import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  public lineChartData = []

  public currentRa: string;

  constructor(private http: HttpClient) {
    this.currentRa = (localStorage.getItem('currentRa') !== null ? localStorage.getItem('currentRa') : '');
    this.http.post('http://localhost:3000/api/query_linha', { ra: this.currentRa }).subscribe(res => {
      this.lineChartData = [
        {
          data: res['notas'],
          borderWidth: 6,
          label: 'Nota'
        }
      ]
    })
  }

  ngOnInit() {
  }

}
