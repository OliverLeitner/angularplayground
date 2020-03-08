import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
})
export class MenubarComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Home', routerLink: 'home' },
      { label: 'Form', routerLink: 'form' },
      { label: 'Socket', routerLink: 'socket' },
      { label: 'Grid', routerLink: 'grid' }
    ]
  }

}
