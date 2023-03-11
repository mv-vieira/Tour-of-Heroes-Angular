import { ConfirmationDialogComponent } from './../../../core/components/confirmation-dialog/confirmation-dialog.component';
import { DialogData } from './../../../core/models/dialog-data.model';
import { HeroService } from '../../../core/services/hero.service';

import { Hero } from '../../../core/models/hero.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  displayedColumns: string[] = ['id', 'name', 'actions'];


  constructor(
    private heroService: HeroService,
    private dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  public getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      (heroes) => (this.heroes = heroes));
  }

  public delete(hero: Hero): void {
    const dialogData: DialogData = {
      cancelText: 'Cancel',
      confirmText: 'Delete',
      content: `Delete '${hero.name}'?`
    };

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: dialogData, 
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.heroService.deleteHero(hero).subscribe(() => {
          this.getHeroes();
        });
      }
    });
  }

  public onSelected(hero: Hero): void {
    this.router.navigate(['/heroes', hero.id]);
  }
}




