import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';


const routes: Routes = [
  {path: 'heroes/:id', component: HeroDetailComponent},
  {path: 'heroes', component: HeroesComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],

  exports: [RouterModule]
})
export class HeroesRoutingModule { }
