import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
})

export class MenubarComponent implements MenuItem {

  public items: MenuItem[] = [];

  constructor() {
      this.items.push(this.newItem({label: 'Home', routerLink: 'home'}));
      this.items.push(this.newItem({label: 'Form', routerLink: 'form'}));
      this.items.push(this.newItem({label: 'Socket', routerLink: 'socket'}));
      this.items.push(this.newItem({label: 'Grid', routerLink: 'grid'}));
  }

  protected newItem(item: MenuItem): MenuItem {
    return { label: item.label, routerLink: item.routerLink } as MenuItem;
  }

}
