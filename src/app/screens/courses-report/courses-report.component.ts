import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
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
  constructor(public dialog: MatDialog) {}

  displayedColumns: string[] = [
    'select',
    'name',
    'teacher',
    'duration',
    'description',
    'shift',
    'price',
    'action',
  ];
  dataSource = ELEMENT_DATA;
  faPen = faPen;
  faTrash = faTrash;
  selection = new SelectionModel<ICourse>(true, []);
  loading = false;

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  openDialog(id: string): void {
    this.dialog.open(DialogAnimation, {
      width: '40vw',
      data: id,
    });
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

@Component({
  selector: 'dialog-animation.',
  templateUrl: 'dialog-animation.html',
  styleUrls: ['./dialog-animation.css'],
})
export class DialogAnimation {
  constructor(
    public dialogRef: MatDialogRef<DialogAnimation>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onDelete(id: string) {
    console.log(id);
  }
}
