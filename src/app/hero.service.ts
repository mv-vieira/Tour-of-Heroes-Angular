import { Injectable } from '@angular/core';

import { Hero } from './hero.model';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  public getHeroes(): Hero[]{
    return HEROES;
  }
}
