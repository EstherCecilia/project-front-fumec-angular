import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    var token = localStorage.getItem('token')
    if(!token || this.isTokenExpired(token)) {
      localStorage.removeItem('token')
      this.router.navigate(['/login'])
      return false;
    }

    return true;
  }

  isTokenExpired(token: string): boolean {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;  }
  
}
