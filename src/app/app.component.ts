import { Component, OnInit } from '@angular/core';
import { demo } from './models/demo';
import { MenubarComponent } from './menubar/menubar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MenubarComponent]
})
export class AppComponent implements OnInit {
  testObject: demo = new demo(2, 3);
  constructor() {
    this.testObject.title = 'start page';
  }

  ngOnInit() {
  }
}
