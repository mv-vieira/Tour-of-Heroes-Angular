import { MessageService } from '../core/services/message.service';
import { Hero } from '../core/models/hero.model';

import { Component, OnInit } from '@angular/core';
import { HeroService } from '../core/services/hero.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  displayedColumns: string[] = ['id', 'name'];

  constructor(
    private heroService: HeroService,
    private messageService: MessageService,
    ){ }

  ngOnInit(): void {
    this.messageService.clear();
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes.slice(1,5));
  }

}
