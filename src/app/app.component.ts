import { Component, OnInit } from '@angular/core';
import { MenubarComponent } from './menubar/menubar.component';
import { demo } from './models/demo';

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
