import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pie-chart',
  templateUrl: './my-pie-chart.component.html',
  styleUrls: ['./my-pie-chart.component.css']
})
export class MyPieChartComponent implements OnInit {

  public pieChartLabels = ['CCOVON07', 'CCOPA2N07', 'CCOPA1N07', 'CCOMON07'];
  public pieChartData = [23, 10, 78, 5];
  public pieChartType = 'pie';

  constructor() { }

  ngOnInit() {
  }

}
