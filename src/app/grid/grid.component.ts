import { Component, OnInit } from '@angular/core';
import { Columns } from '../interfaces/columns';
import { Data } from '../interfaces/data';
import { demo } from '../models/demo';
import { AppComponent } from './../app.component';
import { DataService } from './../services/data.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
})
export class GridComponent implements OnInit {
  public testObject: demo;
  public data: Data[];
  public cols: Columns[];
  public num: number = 0;

  constructor(private appComponent: AppComponent, private dataService: DataService, private primengConfig: PrimeNGConfig) {
    this.testObject = appComponent.testObject;
    this.testObject.title = 'grid stuff';
  }

  async ngOnInit() {
    this.primengConfig.ripple = true;
    await this.dataService.getDataSmall().then(data => this.data = data).then(() => this.num = 1);
  }

}
