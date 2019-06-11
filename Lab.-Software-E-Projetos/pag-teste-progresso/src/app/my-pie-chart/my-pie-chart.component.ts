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


  constructor(private http: HttpClient) {
    this.http.post('http://localhost:3000/api/query_pizza', {}).subscribe(res => {
      this.pieChartLabels = res['curso'];
      this.pieChartData = res['notas'];
    })
  }

  ngOnInit() {
  }

}
