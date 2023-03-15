/* eslint-disable @typescript-eslint/no-inferrable-types */
import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input()
  isLoggedIn: boolean | null = null;

  @Input()
  title: string  = '';

  @Input()
  menuItems: MenuItem[] = [];

  @Output()
  private logout = new EventEmitter();


  constructor(private messageService: MessageService) { }

  public onLogout(): void {
    this.logout.emit();
    this.messageService.clear();
    this.messageService.add("Logout done successfully");
  }
}
