import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {
  @Input() right: any;
  @Input() wrong: any;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
          beginAtZero: true,
          fixedStepSize: 1
        }
      }]
    },
    borderWidth: 0,
    dataPointWidth: 20
  };

  public chartColors: Array<any> = [
    {
      backgroundColor: '#ddd',
      borderColor: '#ddd',
      pointBackgroundColor: '#ddd',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#ddd'
    },
    {
      backgroundColor: '#000',
      borderColor: '#000',
      pointBackgroundColor:  '#000',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#000'
    }];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData: any[];

  public barChartLabels = [];
  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor() {
  }
  ngOnInit() {
    this.barChartData  = [
      {data: [this.right], label: 'Right'},
      {data: [this.wrong], label: 'Wrong'}
    ];
    console.log('this.right', this.right, this.wrong);
  }
}
