import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public router: Router;
  currentRa: string;
  currentName: string;

  constructor() {
    this.currentRa = (localStorage.getItem('currentRa') !== null ? localStorage.getItem('currentRa') : '');
    this.currentName = (localStorage.getItem('currentName') !== null ? localStorage.getItem('currentName') : '');
  }

  ngOnInit() {
    if (this.currentRa === '' && this.currentName === '') {
      document.location.href = "/";
    }
  }

}
