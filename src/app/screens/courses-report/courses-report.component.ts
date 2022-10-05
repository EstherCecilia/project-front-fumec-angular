import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

export interface ICourse {
  position: number;
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
    position: 0,
    id: 1,
    name: 'Ciências da computação',
    teacher: 'Emerson',
    duration: 4,
    description: 'Pois é...',
    shift: 'Noite',
    price: 1000000,
  },
  {
    position: 1,
    id: 1,
    name: 'Ciências da computação',
    teacher: 'Emerson',
    duration: 4,
    description: 'Pois é...',
    shift: 'Noite',
    price: 1000000,
  },
  {
    position: 2,
    id: 1,
    name: 'Ciências da computação',
    teacher: 'Emerson',
    duration: 4,
    description: 'Pois é...',
    shift: 'Noite',
    price: 1000000,
  },
  {
    position: 3,
    id: 1,
    name: 'Ciências da computação',
    teacher: 'Emerson',
    duration: 4,
    description: 'Pois é...',
    shift: 'Noite',
    price: 1000000,
  },

  {
    position: 4,
    id: 1,
    name: 'Ciências da computação',
    teacher: 'Emerson',
    duration: 4,
    description: 'Pois é...',
    shift: 'Noite',
    price: 1000000,
  },
  {
    position: 5,
    id: 1,
    name: 'Ciências da computação',
    teacher: 'Emerson',
    duration: 4,
    description: 'Pois é...',
    shift: 'Noite',
    price: 1000000,
  },
  {
    position: 6,
    id: 1,
    name: 'Ciências da computação',
    teacher: 'Emerson',
    duration: 4,
    description: 'Pois é...',
    shift: 'Noite',
    price: 1000000,
  },
  {
    position: 7,
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
  faPen = faPen;
  faTrash = faTrash;
  selection = new SelectionModel<ICourse>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource);
  }

  checkboxLabel(row?: ICourse): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }
}
