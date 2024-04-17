import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import { GoogleChartsModule, ChartType } from 'angular-google-charts';


@Component({
  selector: 'app-google',
  standalone: true,
  imports: [RouterOutlet, GoogleChartsModule],
  templateUrl: './google.component.html',
  styleUrl: './google.component.css'
})
export class GoogleComponent {

  chartType: ChartType = ChartType.CandlestickChart;
  chartData: any = [];
  chartOptions: any = {
    legend: 'none',
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: '#a52714' }, // Kolor świec spadających
      risingColor: { strokeWidth: 0, fill: '#0f9d58' }, // Kolor świec rosnących
    },
    series: {
      0: { type: 'candlesticks' },
      1: { type: 'line', color: '#ff0000', fallingColor: {
        fill : '#00ff00'
        }, visibleInLegend: true, targetAxisIndex:1 }, // Linia informacji o otwarciu
      2: { type: 'line', color: '#00ff00', visibleInLegend: false }, // Linia informacji o zamknięciu
      3: { type: 'area', color: '#00ff00', visibleInLegend: false, areaOpacity: 0.3 } // Obszar między liniami

    },
  };
  chartWidth: number = 900;
  chartHeight: number = 500;

  constructor() {
    // Przykładowe dane
    this.chartData = [
      ['Mon', 20, 28, 38, 45, 60, 70],
      ['Tue', 31, 38, 55, 66, 60, 70],
      ['Wed', 50, 55, 77, 80, 60, 70],
      ['Thu', 77, 77, 66, 50, 60, 70],
      ['Fri', 68, 66, 22, 15, 60, 70]
    ];
  }
}
