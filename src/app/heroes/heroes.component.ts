import { HEROES } from './../mock-heroes';
import { Hero } from './../hero.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  hero: Hero = {
    id:1,
    name:"Super-Man"
  };

  heroes = HEROES;
  selectedHero?: Hero;


  public onSelect(hero: Hero): void{

    this.selectedHero = hero;
  }
}
