import { MenuItem } from './core/models/menu-item.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';
  menuItems: MenuItem[] = [
  {
    icon: 'dashboard',
    routerLink: '/dashboard',
    toolTipText: 'Dashboard',
  },
  {
    icon: 'health_and_safety',
    routerLink: '/heroes',
    toolTipText: 'Heroes',   
  },
  ];
}
