import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-pie-chart',
  templateUrl: './my-pie-chart.component.html',
  styleUrls: ['./my-pie-chart.component.css']
})
export class MyPieChartComponent implements OnInit {

  public pieChartLabels = [];
  public pieChartData = [];
  public pieChartType = 'pie';

  public currentRa: string

  public pieColors=[
     {
       backgroundColor: [
         'rgba(63, 191, 127, 1)',
         'rgba(191, 189, 63, 1)',
         'rgba(65, 63, 191, 1)',
         'rgba(176, 63, 191, 1)',
         'rgba(191, 63, 155, 1)',
         'rgba(63, 191, 189, 1)',
         'rgba(85, 191, 63, 1)',
         'rgba(191, 108, 63, 1)'
     ]
     }
   ];

  constructor(private http: HttpClient) {
      this.currentRa = (localStorage.getItem('currentRa') !== null ? localStorage.getItem('currentRa') : '');
      this.http.post('http://localhost:3000/api/query_pizza', {ra: this.currentRa}).subscribe(res => {
      this.pieChartLabels = res['curso'];
      this.pieChartData = res['notas'];
    })
  }

  ngOnInit() {
  }

}
