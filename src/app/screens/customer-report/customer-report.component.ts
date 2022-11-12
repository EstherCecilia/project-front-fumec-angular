import { SelectionModel } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

export interface ICutomer {
  position: number;
  id: string;
  name: string;
  phone: string;
  email: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode?: string;
}

@Component({
  selector: 'app-customer-report',
  templateUrl: './customer-report.component.html',
  styleUrls: ['./customer-report.component.css'],
})
export class CustomerReportComponent implements OnInit {
  constructor(private readonly http: HttpClient, public dialog: MatDialog) {}

  displayedColumns: string[] = [
    'select',
    'name',
    'phone',
    'email',
    'neighborhood',
    'city',
    'state',
    'action',
  ];
  dataSource = [];
  faPen = faPen;
  faTrash = faTrash;
  selection = new SelectionModel<ICutomer>(true, []);
  loading = true;

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

  checkboxLabel(row?: ICutomer): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  getCustomers() {
    this.loading = true;
    this.http.get<any>('leads').subscribe({
      next: (res) => {
        this.dataSource = res.map((customer: ICutomer, index: number) => ({
          ...customer,
          position: index,
          neighborhood: customer.zipCode,
          city: customer.zipCode,
          state: customer.zipCode,
        }));
      },
      complete: () => (this.loading = false),
    });
  }

  ngOnInit(): void {
    this.getCustomers();
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
