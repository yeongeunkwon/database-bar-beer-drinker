import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Bar {
  name: string;
  addr: string;
  city: string;
  state: string;
  license: string;
  openingTime: string;
  closingTime: string;
}

export interface BarMenuItem {
  item: string;
  price: number;
 }

@Injectable({
  providedIn: 'root'
})
export class BarsService {
  constructor(
    public http: HttpClient
    ) {   }

    getBars() {
      return this.http.get<Bar[]>('/api/bar');
    }

    getBar(bar: string) {
      return this.http.get<Bar>('/api/bar/' + bar);
    } 

    getMenu(bar: string) {
      return this.http.get<BarMenuItem[]>('/api/menu/' + bar);
    }

    getTopDrinkers(bar: string) {
      return this.http.get<any[]>('/api/top_drinkers/' + bar);
    }

    getMostPopularBeers(bar: string) {
      return this.http.get<any[]>('/api/most_popular_beers/' + bar);
    }

    getMostPopularManf(bar: string) {
      return this.http.get<any[]>('/api/most_popular_manf/' + bar);
    }

    getBusiestInDay(bar: string) {
      return this.http.get<any[]>('/api/busiest_in_day/' + bar);
    }

    getBusiestOfWeek(bar: string) {
      return this.http.get<any[]>('/api/busiest_of_week/' + bar);
    }
}