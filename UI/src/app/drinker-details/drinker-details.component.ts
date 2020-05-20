import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinkerService, Drinker, Trans } from '../drinker.service';
import { HttpResponse } from '@angular/common/http';

declare const Highcharts: any;

@Component({
  selector: 'app-drinker-details',
  templateUrl: './drinker-details.component.html',
  styleUrls: ['./drinker-details.component.css']
})
export class DrinkerDetailsComponent implements OnInit {

  drinkerName: string;
  drinkerDetails: Drinker;
  trans: Trans[];

  constructor(
    private drinkerService: DrinkerService,
    private route: ActivatedRoute
    ) { 
      route.paramMap.subscribe((paramMap) => {
        this.drinkerName = paramMap.get('drinker');
        drinkerService.getDrinker(this.drinkerName).subscribe(
          data => {
          this.drinkerDetails = data;
          },
          (error: HttpResponse<any>) => {
          if (error.status === 404) {
            alert('Drinker not found');
          } 
          else {
            console.error(error.status + ' - ' + error.body);
              alert('An error occurred on the server. Please check the browser console.')
          }
          }
        );

        drinkerService.getDrinkerTrans(this.drinkerName).subscribe(
          data => {
            this.trans = data;
          }
        );

          this.drinkerService.getSpendingBars(this.drinkerName).subscribe(
            data => {
              console.log(data);
              const bar = [];
              const spending = [];
              data.forEach(i => {
                bar.push(i.Bar);
                spending.push(i.Spending);
              });
            this.renderSpendingBarsChart(bar, spending);
            }
          );

          this.drinkerService.getSpendingDates(this.drinkerName).subscribe(
            data => {
              console.log(data);
              const day = [];
              const spending = [];
              data.forEach(i => {
                day.push(i.Day);
                spending.push(i.Spending);
              });
            this.renderSpendingDatesChart(day, spending);
            }
          );

          this.drinkerService.getSpendingWeeks(this.drinkerName).subscribe(
            data => {
              console.log(data);
              const week = [];
              const spending = [];
              data.forEach(i => {
                week.push(i.Week);
                spending.push(i.Spending);
              });
            this.renderSpendingWeeksChart(week, spending);
            }
          );

          this.drinkerService.getSpendingMonths(this.drinkerName).subscribe(
            data => {
              console.log(data);
              const month = [];
              const spending = [];
              data.forEach(i => {
                month.push(i.Months);
                spending.push(i.Spending);
              });
            this.renderSpendingMonthsChart(month, spending);
            }
          );
      });       
    }

  ngOnInit() {
  }

  renderDrinkerBeerChart(beers: string[], counts: number[]) {
    Highcharts.chart('drinker-beer', {
      chart: { type: 'column' },
      title: { text: 'Beers S/He Orders the Most' },
      xAxis: {
      categories: beers,
      title: { text: 'Beer' }
      },
      yAxis: {
        min: 0,
        title: { text: 'Number Ordered' },
        labels: { overflow: 'justify' }
      },
      plotOptions: {
        bar: {
          dataLabels: { enabled: true }
        }
      },
      legend: { enabled: false },
      credits: { enabled: false },
      series: [{ data: counts }]
    });
  }

  renderSpendingBarsChart(bars: string[], spendings: number[]) {
    Highcharts.chart('spending-bars', {
      chart: { type: 'column' },
      title: { text: 'Total Spendings by Bar' },
      xAxis: {
      categories: bars,
      title: { text: 'Bar' }
      },
      yAxis: {
        min: 0,
        title: { text: 'Spending' },
        labels: { overflow: 'justify' }
      },
      plotOptions: {
        bar: {
          dataLabels: { enabled: true }
        }
      },
      legend: { enabled: false },
      credits: { enabled: false },
      series: [{ data: spendings }]
    });
  }

  renderSpendingDatesChart(days: string[], spendings: number[]) {
    Highcharts.chart('spending-dates', {
      chart: { type: 'column' },
      title: { text: 'Total Spendings by Date' },
      xAxis: {
      categories: days,
      title: { text: 'Date' }
      },
      yAxis: {
        min: 0,
        title: { text: 'Spending' },
        labels: { overflow: 'justify' }
      },
      plotOptions: {
        bar: {
          dataLabels: { enabled: true }
        }
      },
      legend: { enabled: false },
      credits: { enabled: false },
      series: [{ data: spendings }]
    });
  }

  renderSpendingWeeksChart(weeks: string[], spendings: number[]) {
    Highcharts.chart('spending-weeks', {
      chart: { type: 'column' },
      title: { text: 'Total Spendings by Week' },
      xAxis: {
      categories: weeks,
      title: { text: 'Week' }
      },
      yAxis: {
        min: 0,
        title: { text: 'Spending' },
        labels: { overflow: 'justify' }
      },
      plotOptions: {
        bar: {
          dataLabels: { enabled: true }
        }
      },
      legend: { enabled: false },
      credits: { enabled: false },
      series: [{ data: spendings }]
    });
  }

  renderSpendingMonthsChart(months: string[], spendings: number[]) {
    Highcharts.chart('spending-months', {
      chart: { type: 'column' },
      title: { text: 'Total Spendings by Month' },
      xAxis: {
      categories: months,
      title: { text: 'Month' }
      },
      yAxis: {
        min: 0,
        title: { text: 'Spending' },
        labels: { overflow: 'justify' }
      },
      plotOptions: {
        bar: {
          dataLabels: { enabled: true }
        }
      },
      legend: { enabled: false },
      credits: { enabled: false },
      series: [{ data: spendings }]
    });
  }
}