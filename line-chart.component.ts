import { ChartOptions } from 'chart.js';
import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {


  chartOptions: any;
  highcharts: typeof Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    this.getLineChart();
  }

  getLineChart(){
    this.chartOptions = {
      chart: {
        type : 'spline'
      },
      title:{
        text: 'Sales Statistics'
      },
      xAxis: {
        categories:[
          'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
        ]
      },
      yAxis:{
        title:{
          text:''
        }
      },
      // tooltip:{
      //   valueSuffix:'$'
      // },
      // credits:{
      //   enabled:true
      // },
      navigator:{
        enabled:true
      },
      rangeSelector:{
        enabled:true
      },
      scrollbar:{
        enabled:true
      },
      series:this.chartData
    }
  }

  chartData = [
    {
      name: 'All Days',
      data: [4,8,6,12,18,15,25]
    },
    
  ]
}