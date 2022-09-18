import { Component, OnInit } from '@angular/core';

type Course = {
  label: string;
  value: string;
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  courses: Course[] = [
    { label: 'Ciências da computação', value: 'computer science' },
  ];
}
