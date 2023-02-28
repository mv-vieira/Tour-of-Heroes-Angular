import { environment } from './../../../environments/environment';
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { Hero } from './../models/hero.model';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = `${environment.baseUrl}/heroes`;



  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }

  // GET /heroes
  public getHeroes(): Observable<Hero[]> {
    return this.http
    .get<Hero[]>(this.heroesUrl)
    .pipe(tap((heroes) => this.log(`fetched ${heroes.length} heroes`)));
  }

  // GET /heroes/id
  public getHeroByID(id: number): Observable<Hero> {
    return this.http
    .get<Hero>(`${this.heroesUrl}/${id}`)
    .pipe(tap((hero) => this.log(`fetched hero ID = ${id} and Name = ${hero.name}`)));
  }

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`)
  }
}
