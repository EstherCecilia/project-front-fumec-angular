import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

type PagesPathname = {
  [key: string]: string;
};
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
})
export class BaseComponent implements OnInit {
  active: string;
  constructor(private router: Router) {
    this.active = 'home';
  }
  ngOnInit(): void {
    this.changeTabMenu();
  }

  pagesPathname: PagesPathname = {
    '/app/home': 'home',
    '/app/report': 'report',
    '/app/register': 'register',
    '/app/dashboard': 'dashboard',
  };

  changeTabMenu() {
    const path = location.pathname;
    this.active = this.pagesPathname[path];
  }

  handleMenu() {
    const elementTopNav = document.getElementById('myTopnav');

    if (!elementTopNav) return;
    if (elementTopNav.className === 'topnav') {
      elementTopNav.className += ' responsive';
    } else {
      elementTopNav.className = 'topnav';
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
