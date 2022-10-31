import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

const FIRST_COLOR: string = '#335d9f';
const SECOND_COLOR: string = '#7EA3D5';
const THIRD_COLOR: string = '#b3d2f7';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  constructor() {}

  option = {
    legend: {},
    tooltip: {},
    series: [
      {
        data: [
          {
            value: [120, 110],
            itemStyle: { normal: { color: FIRST_COLOR } },
          },
          {
            value: 200,
            itemStyle: { normal: { color: FIRST_COLOR } },
          },
          {
            value: 150,
            itemStyle: { normal: { color: FIRST_COLOR } },
          },
        ],
        type: 'bar',
      },
      {
        data: [
          {
            value: [120, 110],
            itemStyle: { normal: { color: SECOND_COLOR } },
          },
          {
            value: 200,
            itemStyle: { normal: { color: SECOND_COLOR } },
          },
          {
            value: 150,
            itemStyle: { normal: { color: SECOND_COLOR } },
          },
        ],
        type: 'bar',
      },
      {
        data: [
          {
            value: [120, 110],
            itemStyle: { normal: { color: THIRD_COLOR } },
          },
          {
            value: 200,
            itemStyle: { normal: { color: THIRD_COLOR } },
          },
          {
            value: 150,
            itemStyle: { normal: { color: THIRD_COLOR } },
          },
        ],
        type: 'bar',
      },
    ],
    xAxis: { type: 'category' },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
  };

  createChart() {
    const chartDom = document.getElementById('main-bar');
    if (!chartDom) return;
    const myChart = echarts.init(chartDom);
    myChart.setOption(this.option);
  }

  ngOnInit(): void {
    this.createChart();
  }
}
