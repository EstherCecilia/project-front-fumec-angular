import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit {
  public chart: any;

  constructor() {}

  createChart() {
    this.chart = new Chart('line-chart', {
      type: 'line',
      data: {
        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
        datasets: [
          {
            data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
            label: 'Africa',
            borderColor: '#3e95cd',
            fill: false,
          },
        ],
      },
      // options: {
      //   title: {
      //     display: true,
      //     text: 'World population per region (in millions)',
      //   },
      // },
    });
  }

  ngOnInit(): void {
    this.createChart();
  }
}
