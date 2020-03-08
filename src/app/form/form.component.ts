import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { demo } from '../models/demo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  public testObject: demo; // the master object
  public pizzaSelection: string[]; // for the primeng thingy
  constructor(private appComponent: AppComponent) {
    this.testObject = appComponent.testObject; // binding to master
    this.testObject.title = 'im on the forms'; // changing title on master

  }
  ngOnInit(): void {
    // fill in some data
    this.testObject.string1 = "a first string from somewhere...";
    this.testObject.string2 = "a second string from somewhere...";
  }

  btnClick() {
    console.log(this.pizzaSelection);
  }
}
