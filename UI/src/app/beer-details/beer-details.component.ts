import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeersService, Beer, BeerBars} from '../beers.service';
import { HttpResponse } from '@angular/common/http';

declare const Highcharts: any;

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {

  beerName: string;
  beerDetails: Beer;
  beerBars: BeerBars[];

  constructor(
    private beerService: BeersService,
    private route: ActivatedRoute
    ) { 
      route.paramMap.subscribe((paramMap) => {
        this.beerName = paramMap.get('beer');
        beerService.getBeer(this.beerName).subscribe(
          data => {
          this.beerDetails = data;
          },
          (error: HttpResponse<any>) => {
            if (error.status === 404) {
              alert('Beer not found');
            } 
            else {
              console.error(error.status + ' - ' + error.body);
                alert('An error occurred on the server. Please check the browser console.')
            }
          }
          );

          beerService.getBeerBars(this.beerName).subscribe(
            data => {
              this.beerBars = data;
            }
          );

          this.beerService.getBeerMostBars(this.beerName).subscribe(
            data => {
              console.log(data);
              const bars = [];
              const count = [];
              data.forEach(i => {
                bars.push(i.bar);
                count.push(i.count);
              });
            this.renderBeerMostBarsChart(bars, count);
            }
          );

          this.beerService.getBeerMostDrinkers(this.beerName).subscribe(
            data => {
              console.log(data);
              const drinkers = [];
              const count = [];
              data.forEach(i => {
                drinkers.push(i.Drinker);
                count.push(i.Count);
              });
            this.renderBeerMostDrinkersChart(drinkers, count);
            }
          );

          this.beerService.getBeerHourDist(this.beerName).subscribe(
            data => {
              console.log(data);
              const hour = [];
              const count = [];
              data.forEach(i => {
                hour.push(i.Hour);
                count.push(i.Count);
              });
            this.renderBeerHourDistChart(hour, count);
            }
          );

          this.beerService.getBeerDayDist(this.beerName).subscribe(
            data => {
              console.log(data);
              const day = [];
              const count = [];
              data.forEach(i => {
                day.push(i.Day);
                count.push(i.Count);
              });
            this.renderBeerDayDistChart(day, count);
            }
          );

          this.beerService.getBeerWeekDist(this.beerName).subscribe(
            data => {
              console.log(data);
              const week = [];
              const count = [];
              data.forEach(i => {
                week.push(i.Week);
                count.push(i.Count);
              });
            this.renderBeerWeekDistChart(week, count);
            }
          );
      });       
    }

  ngOnInit() {
  }

  renderBeerMostBarsChart(bars: string[], counts: number[]) {
    Highcharts.chart('beer-most-bars', {
      chart: { type: 'column' },
      title: { text: 'Bars where this Beer Sells the Most ' },
      xAxis: {
      categories: bars,
      title: { text: 'Bar' }
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

  renderBeerMostDrinkersChart(drinkers: string[], counts: number[]) {
    Highcharts.chart('beer-most-drinkers', {
      chart: { type: 'column' },
      title: { text: 'Drinkers who are the Biggest Consumers of this Beer' },
      xAxis: {
      categories: drinkers,
      title: { text: 'Drinker' }
      },
      yAxis: {
        min: 0,
        title: { text: 'Number Purchased' },
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

  renderBeerHourDistChart(hours: string[], counts: number[]) {
    Highcharts.chart('beer-hour-dist', {
      chart: { type: 'column' },
      title: { text: 'Hour Distribution of when this Beer is Sold the Most' },
      xAxis: {
      categories: hours,
      title: { text: 'Hour' }
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

  renderBeerDayDistChart(day: string[], counts: number[]) {
    Highcharts.chart('beer-day-dist', {
      chart: { type: 'column' },
      title: { text: 'Day Distribution of when this Beer is Sold the Most' },
      xAxis: {
      categories: day,
      title: { text: 'Day of the Week' }
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

  renderBeerWeekDistChart(week: string[], counts: number[]) {
    Highcharts.chart('beer-week-dist', {
      chart: { type: 'column' },
      title: { text: 'Week Distribution of when this Beer is Sold the Most' },
      xAxis: {
      categories: week,
      title: { text: 'Week' }
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
}
