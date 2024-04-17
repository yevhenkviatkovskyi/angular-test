import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import Chart from 'chart.js/auto';
// import "./chartjs-chart-financial.js";

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent{
  title = 'ng-chart';
  chart: any = [];

  dataToPlot = [
    { t: 1491004800000, o: 31.11, h: 33.04, l: 30.58, c: 32.03 },
    { t: 1491177600000, o: 31.23, h: 34.77, l: 30.35, c: 32.24 },
    { t: 1491264000000, o: 31.08, h: 34.68, l: 29.54, c: 32.48 },
    { t: 1491350400000, o: 31.68, h: 33.49, l: 28.72, c: 30.46 },
    { t: 1491436800000, o: 29.4, h: 31.83, l: 27.02, c: 29.76 }
  ];
  ngOnInit(): void {

    this.createChart();
  }

  createChart(){
    // this.chart = new Chart('canvasFinancial',{
    //   type: 'candlestick',
    //   data: {
    //     datasets: [
    //       {
    //         label: "Financial Chart",
    //         data: this.dataToPlot
    //       }
    //     ]
    //   },
    //   options: {
    //     scales: {
    //       yAxes: [
    //         {
    //           ticks: {
    //             beginAtZero: true
    //           }
    //         }
    //       ]
    //     }
    //   }
    // });

    // this.chart = new Chart('canvas', {
    //   type: 'bar',
    //   data: {
    //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //     datasets: [
    //       {
    //         label: '# of Votes',
    //         data: [12, 19, 3, 5, 2, 3],
    //         borderWidth: 1,
    //       },
    //     ],
    //   },
    //   options: {
    //     scales: {
    //       y: {
    //         beginAtZero: true,
    //       },
    //     },
    //   },
    // });
  }
}
