/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './../models/hero.model';


import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  public getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  public getHeroByID(id: number): Observable<Hero> {
   const hero = HEROES.find(hero => hero.id === id)!;
   this.messageService.add(`HeroService: fetched hero id = ${id}`);
   return of(hero);
  }
}
