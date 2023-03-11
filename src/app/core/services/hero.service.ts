/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

import { environment } from './../../../environments/environment';
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
      .get<Hero>(this.getUrl(id))
      .pipe(tap((hero) => this.log(`fetched ${this.descAttributes(hero)}`)));
  }

  // GET /heroes?name=term

  public searchHero(term: string): Observable<Hero[]> {
    if(!term.trim()) {
      return of([]);
    }

    return this.http.get<Hero[]>(`${this.heroesUrl}?name=${term}`)
    .pipe(
      tap((heroes) => 
      heroes.length
      ? this.log(`found ${heroes.length} hero(es) matching "${term}"`)
      : this.log(`no heroes matching "${term}"`)
      
        )
      );
  }

  // POST /heroes/
  public createHero(hero: Hero): Observable<Hero> {
    return this.http
      .post<Hero>(this.heroesUrl, hero)
      .pipe(tap((hero) => this.log(`Created ${this.descAttributes(hero)}`)))
  }

  // PUT /hero/id
  public updateHero(hero: Hero): Observable<Hero> {
    return this.http
      .put<Hero>(this.getUrl(hero.id), hero)
      .pipe(tap((hero) => this.log(`Updated ${this.descAttributes(hero)}`)));
  }

  // Delete /hero/id
  public deleteHero(hero: Hero): Observable<any> {
    return this.http.delete<any>(this.getUrl(hero.id))
    .pipe(tap(() => this.log(`Deleted ${this.descAttributes(hero)}`)));
  }

  // Descrição de Atributos
  private descAttributes(hero: Hero): string {
    return `Hero ID = ${hero.id} and Name = ${hero.name}`
  }

  // Log Message
  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`)
  }

  // Get Url with ID
  private getUrl(id: number): string{
    return `${this.heroesUrl}/${id}`;
  }
}

