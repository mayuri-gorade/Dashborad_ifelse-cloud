import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {
  chartOptions: any;
  highcharts: typeof Highcharts = Highcharts;


  constructor() {
  }
// circle
  chartOptions2 = {
	  animationEnabled: true,
	  title:{
		text: "Top Products"
	  },
	  data: [{
		type: "doughnut",
		// yValueFormatString: "#,###.##'%'",
		indexLabel: "{name}",
		dataPoints: [
		  { y: 50, name: "Men",color: "rgb(154, 154, 244)" },
		  { y: 30, name: "Electronics",color: "skyblue" },
		  { y: 20, name: "Women", color: " rgb(7, 7, 190)"  },
		  
		]
	  }]
	}
  ngOnInit(): void {
    this.getbarchart();
  }


  // column
  getbarchart(){
    this.chartOptions = {
      chart: {
        type : 'column'
      },
      title:{
        text: 'Balance Overview'
      },
     
      xAxis: {
        categories:[
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'
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
      credits:{
        enabled:false
      },
      // navigator:{
      //   enabled:true
      // },
      plotOptions:{
        series:{
          stacking:'normal',
        },
        bar:{
          dataLables:{
            enabled:true,
          }
        }
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
      name: 'Borrow',
      data: [631,727,100,200,400,200,100,200,300,400,300,400]
    },
    {
      name: 'Income',
      data: [221,507,200,300,900,100,200,900,980,900,800,200]
    },
    
  ]  
}
