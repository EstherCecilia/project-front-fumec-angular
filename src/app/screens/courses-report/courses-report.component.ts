import { Component } from '@angular/core';

export interface ICourse {
  id: number;
  name: string;
  teacher: string;
  duration: number;
  description: string;
  shift: string;
  price: number;
}

const ELEMENT_DATA: ICourse[] = [
  {
    id: 1,
    name: 'Ciências da computação',
    teacher: 'Emerson',
    duration: 4,
    description: 'Pois é...',
    shift: 'Noite',
    price: 1000000,
  },
];

@Component({
  selector: 'app-courses-report',
  templateUrl: './courses-report.component.html',
  styleUrls: ['./courses-report.component.css'],
})
export class CoursesReportComponent {
  displayedColumns: string[] = [
    'select',
    'name',
    'teacher',
    'duration',
    'description',
    'shift',
    'price',
  ];
  dataSource = ELEMENT_DATA;
}
