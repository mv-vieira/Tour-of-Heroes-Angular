import { HeroService } from './../hero.service';

import { Hero } from './../hero.model';
import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  displayedColumns: string[] = ['position', 'name'];
  dataSource = HEROES;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService,) { }

  ngOnInit(): void {
    this.messageService.clear();
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      (heroes) => (this.heroes = heroes));
  }
}




