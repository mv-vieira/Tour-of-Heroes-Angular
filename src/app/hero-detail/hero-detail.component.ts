import { HeroService } from './../hero.service';

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit{

  hero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService,
    private location: Location,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.messageService.clear()
    this.getHeroByID();
  }

  public getHeroByID(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHeroByID(id).subscribe(hero => this.hero = hero);
  }

  public goBack(): void {
    this.location.back();
  }
}
