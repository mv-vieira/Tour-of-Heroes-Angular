/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, Input } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Input()
  title: string  = '';

  @Input()
  menuItems: MenuItem[] = [];
}
