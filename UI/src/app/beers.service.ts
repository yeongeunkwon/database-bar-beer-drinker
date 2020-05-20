import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Beer {
  name: string;
  manf: string;
}

export interface BeerBars {
  bar: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})

export class BeersService {
  constructor(
    public http: HttpClient
    ) {   }

  getBeers() {
    return this.http.get<Beer[]>('/api/beer');
  }

  getBeer(beer: string) {
    return this.http.get<Beer>('/api/beer/' + beer);
  } 

  getBeerBars(beer: string) {
    return this.http.get<BeerBars[]>('/api/beer_bars/' + beer);
  }

  getBeerMostBars(beer: string) {
    return this.http.get<any[]>('/api/beer_most_bars/' + beer);
  }

  getBeerMostDrinkers(beer: string) {
    return this.http.get<any[]>('/api/beer_most_drinkers/' + beer);
  }

  getBeerHourDist(beer: string) {
    return this.http.get<any[]>('/api/beer_hour_dist/' + beer);
  }

  getBeerDayDist(beer: string) {
    return this.http.get<any[]>('/api/beer_day_dist/' + beer);
  }

  getBeerWeekDist(beer: string) {
    return this.http.get<any[]>('/api/beer_week_dist/' + beer);
  }
}