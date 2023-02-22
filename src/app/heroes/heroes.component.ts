import { HeroService } from '../core/services/hero.service';

import { Hero } from '../core/models/hero.model';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../core/services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  displayedColumns: string[] = ['id', 'name'];


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




