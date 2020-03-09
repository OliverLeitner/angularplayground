import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../app.component';
import { testEnum } from './../enums/test.enum';
import { demo } from './../models/demo'; // the global object keeper

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public testObject: demo; // filling out an object
  public options: string[]; // holding enum selection options
  enum: typeof testEnum = testEnum; // loading in the enum
  enumSelection: string; // selected enum model thing

  constructor(private appComponent: AppComponent) {
    this.testObject = appComponent.testObject; // binding the object version
    this.testObject.title = 'yet another one'; // per app title
  }

  ngOnInit(): void {
    // doing enums in a2+
    // https://www.gurustop.net/blog/2016/05/24/how-to-use-typescript-enum-with-angular2/
    // still need to splice, even if you do | keyvalue instead...
    const options = Object.keys(testEnum);
    this.options = options.slice(options.length / 2);
  }

  // operate on enum... (onChanges only works with input fields???)
  setEnumVal() {
    this.testObject.enumVal = this.enum[this.testObject.enumName];
    console.log(this.testObject);
  }
}
