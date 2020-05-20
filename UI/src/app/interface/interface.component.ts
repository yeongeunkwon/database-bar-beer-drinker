import { Component, OnInit } from '@angular/core';
import { InterfaceService } from '../interface.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  query: string
  result: any[]

  constructor(
    private route: ActivatedRoute,
    public interfaceService: InterfaceService
    ) { 
      route.paramMap.subscribe((paramMap) => {
        this.query = paramMap.get('query');
        interfaceService.getInterface(this.query).subscribe(
          data => {
          this.result = data;
          },
          error => {
            alert('Could not retrieve the result of the query. Please check your syntax.');
          }
        );
      }
    )
  }

  ngOnInit() {
  }

}
