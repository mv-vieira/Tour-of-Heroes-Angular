import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'dashboard',
    loadChildren: () =>
    import('./dashboard/dashboard.module').then((module) => module.DashboardModule),
  },
  {
    path: 'heroes',
    loadChildren: () =>
    import('./heroes/heroes.module').then((module) => module.HeroesModule),
  },
  {
    path: 'login',
    loadChildren: () =>
    import('./auth/auth.module').then((module) => module.AuthModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
