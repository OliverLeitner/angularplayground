import { Component, OnInit } from '@angular/core';
import { Columns } from '../interfaces/columns';
import { Data } from '../interfaces/data';
import { demo } from '../models/demo';
import { AppComponent } from './../app.component';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
})
export class GridComponent implements OnInit {
  public testObject: demo;
  public data: Data[];
  public cols: Columns[];

  constructor(private appComponent: AppComponent, private dataService: DataService) {
    this.testObject = appComponent.testObject;
    this.testObject.title = 'grid stuff';
  }

  ngOnInit(): void {
    this.dataService.getDataSmall().then(data => this.data = data);
  }

}
