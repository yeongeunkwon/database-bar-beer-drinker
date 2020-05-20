import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Drinker {
  name: string;
  state: string;
  phone: number;
}

export interface Trans {
  bar: string;
  transactionID: number;
  date: string;
  time: string;
  bill: number;
  tax: number;
  tip: number;
  totalPrice: number;
}

@Injectable({
  providedIn: 'root'
})
export class DrinkerService {

  constructor(
    public http: HttpClient
    ) {   }

    getDrinkers() {
      return this.http.get<Drinker[]>('/api/drinker');
    }

    getDrinker(drinker: string) {
      return this.http.get<Drinker>('/api/drinker/' + drinker);
    } 

    getDrinkerTrans(drinker: string) {
      return this.http.get<Trans[]>('/api/drinker_trans/' + drinker);
    }

    getDrinkerBeer(drinker: string) {
      return this.http.get<any[]>('/api/drinker_beer/' + drinker);
    }

    getSpendingBars(drinker: string) {
      return this.http.get<any[]>('/api/spending_bars/' + drinker);
    }

    getSpendingDates(drinker: string) {
      return this.http.get<any[]>('/api/spending_dates/' + drinker);
    }

    getSpendingWeeks(drinker: string) {
      return this.http.get<any[]>('/api/spending_weeks/' + drinker);
    }

    getSpendingMonths(drinker: string) {
      return this.http.get<any[]>('/api/spending_months/' + drinker);
    }
}