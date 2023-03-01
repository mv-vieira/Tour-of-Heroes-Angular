import { HeroService } from '../../../core/services/hero.service';

import { Hero } from '../../../core/models/hero.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  displayedColumns: string[] = ['id', 'name'];


  constructor(
    private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      (heroes) => (this.heroes = heroes));
  }
}




