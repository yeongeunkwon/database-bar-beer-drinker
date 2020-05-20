import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarsService, Bar, BarMenuItem } from '../bars.service';
import { HttpResponse } from '@angular/common/http';

declare const Highcharts: any;

@Component({
  selector: 'app-bar-details',
  templateUrl: './bar-details.component.html',
  styleUrls: ['./bar-details.component.css']
})
export class BarDetailsComponent implements OnInit {
  barName: string;
  barDetails: Bar;
  menu: BarMenuItem[];

  constructor(
    private barService: BarsService,
    private route: ActivatedRoute
    ) { 
      route.paramMap.subscribe((paramMap) => {
        this.barName = paramMap.get('bar');
        barService.getBar(this.barName).subscribe(
          data => {
            this.barDetails = data;
          },
          (error: HttpResponse<any>) => {
            if (error.status === 404) {
              alert('Bar not found');
            } 
            else {
              console.error(error.status + ' - ' + error.body);
                alert('An error occurred on the server. Please check the browser console.')
            }
          }
        );

        barService.getMenu(this.barName).subscribe(
          data => {
            this.menu = data;
          }
        );
        
        this.barService.getTopDrinkers(this.barName).subscribe(
          data => {
            console.log(data);
            const drinkers = [];
            const spendings = [];
            data.forEach(i => {
              drinkers.push(i.Drinker);
              spendings.push(i.Spendings);
            });
          this.renderTopDrinkersChart(drinkers, spendings);
          }
        );

        this.barService.getMostPopularBeers(this.barName).subscribe(
          data => {
            console.log(data);
            const beers = [];
            const count = [];
            data.forEach(i => {
              beers.push(i.beer);
              count.push(i.count);
            });
          this.renderPopularBeersChart(beers, count);
          }
        );

        this.barService.getMostPopularManf(this.barName).subscribe(
          data => {
            console.log(data);
            const manf = [];
            const count = [];
            data.forEach(i => {
              manf.push(i.Manufacturer);
              count.push(i.Count);
            });
          this.renderPopularManfChart(manf, count);
          }
        );

        this.barService.getBusiestInDay(this.barName).subscribe(
          data => {
            console.log(data);
            const hour = [];
            const count = [];
            data.forEach(i => {
              hour.push(i.Hour);
              count.push(i.Count);
            });
          this.renderBusiestInDayChart(hour, count);
          }
        );

        this.barService.getBusiestOfWeek(this.barName).subscribe(
          data => {
            console.log(data);
            const day = [];
            const count = [];
            data.forEach(i => {
              day.push(i.Day);
              count.push(i.Count);
            });
          this.renderBusiestOfWeekChart(day, count);
          }
        );
      });       
    }

  ngOnInit() { }

  renderTopDrinkersChart(drinkers: string[], counts: number[]) {
    Highcharts.chart('top-drinkers', {
      chart: { type: 'column' },
      title: { text: 'Top Drinkers Who Are the Largest Spenders in this Bar' },
      xAxis: {
      categories: drinkers,
      title: { text: 'Drinker' }
      },
      yAxis: {
        min: 0,
        title: { text: 'Total Spending ($)' },
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

  renderPopularBeersChart(beers: string[], counts: number[]) {
    Highcharts.chart('popular-beers', {
      chart: { type: 'column' },
      title: { text: 'Most Popular Beers in this Bar' },
      xAxis: {
        categories: beers,
        title: { text: 'Beer' }
      },
      yAxis: {
        min: 0,
        title: { text: 'Number Sold' },
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

  renderPopularManfChart(manf: string[], counts: number[]) {
    Highcharts.chart('popular-manf', {
      chart: { type: 'column' },
      title: { text: 'Manufacturers Who Sell the Most Beers in this Bar' },
      xAxis: {
      categories: manf,
      title: { text: 'Manufacturer' }
      },
      yAxis: {
        min: 0,
        title: { text: 'Number of Beers Sold' },
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

  renderBusiestInDayChart(hour: string[], counts: number[]) {
    Highcharts.chart('busiest-in-day', {
      chart: { type: 'column' },
      title: { text: 'Busiest Periods of the Day' },
      xAxis: {
      categories: hour,
      title: { text: 'Hour' }
      },
      yAxis: {
        min: 0,
        title: { text: 'Number of Items Sold' },
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

  renderBusiestOfWeekChart(day: string[], counts: number[]) {
    Highcharts.chart('busiest-of-week', {
      chart: { type: 'column' },
      title: { text: 'Busiest Periods of the Week' },
      xAxis: {
      categories: day,
      title: { text: 'Day' }
      },
      yAxis: {
        min: 0,
        title: { text: 'Number of Items Sold' },
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
}