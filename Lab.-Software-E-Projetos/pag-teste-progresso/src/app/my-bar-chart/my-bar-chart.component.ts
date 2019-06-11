import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  public barChartData = [];

  public currentRa: string;

  constructor(private http: HttpClient) {
    this.currentRa = (localStorage.getItem('currentRa') !== null ? localStorage.getItem('currentRa') : '');

    // chamada para a api
    this.http.post('http://localhost:3000/api/query_barra', { ra: this.currentRa }).subscribe(res =>
    {
      this.barChartData = [ // adiciona os dados no array do gráfico
        { data: res['acertoGeral'], label: 'Geral', },
        { data: res['acertoEspec'], label: 'Especifica' }
      ];
    })
  }

  ngOnInit() {
  }

}
