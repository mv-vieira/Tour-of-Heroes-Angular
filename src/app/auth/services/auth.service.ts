import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Credentials } from './../models/credentials.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this.loggedIn.asObservable();


  constructor(private router: Router) { }

  public login(credentials: Credentials): void {
    localStorage.setItem('token', credentials.password);
    this.updateLoggedIn();
    this.router.navigate(['/heroes']);
  }

  public logout(): void {
    localStorage.clear();
    this.updateLoggedIn();
    this.router.navigate(['/login']);
  }

  public updateLoggedIn(): void {
    const token = localStorage.getItem('token');
    if(token) {
      this.loggedIn.next(true);
    } else {
      this.loggedIn.next(false);
    }
  }
}
