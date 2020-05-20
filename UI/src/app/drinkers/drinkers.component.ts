import { Component, OnInit } from '@angular/core';
import { DrinkerService, Drinker } from '../drinker.service';

@Component({
  selector: 'app-drinkers',
  templateUrl: './drinkers.component.html',
  styleUrls: ['./drinkers.component.css']
})
export class DrinkersComponent implements OnInit {

  drinkers: Drinker[];

  constructor(
    public drinkerService: DrinkerService
  ) { 
    this.getDrinkers();
  }

  ngOnInit() {  }

  getDrinkers() {
    this.drinkerService.getDrinkers().subscribe(
      data => {
        this.drinkers = data;
      },
      error => {
        alert('Could not retrieve the list of drinkers.');
      }
    ); 
  }
}
