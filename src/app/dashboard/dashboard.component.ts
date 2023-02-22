import { MessageService } from './../message.service';
import { Hero } from './../hero.model';
import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';


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
