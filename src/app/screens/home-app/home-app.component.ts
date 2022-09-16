import { Component, OnInit } from '@angular/core';
import {
  faPrint,
  faChartLine,
  faMagnifyingGlass,
  faCirclePlus,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-app',
  templateUrl: './home-app.component.html',
  styleUrls: ['./home-app.component.css'],
})
export class HomeAppComponent implements OnInit {
  faPrint = faPrint;
  faChartLine = faChartLine;
  faMagnifyingGlass = faMagnifyingGlass;
  faCirclePlus = faCirclePlus;

  constructor() {}

  ngOnInit(): void {}
}
