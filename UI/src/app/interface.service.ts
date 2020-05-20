import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterfaceService {

  constructor(
    public http: HttpClient
  ) { }

  getInterface(query: string) {
    return this.http.get<any[]>('/api/interface/' + query);
  }
}
