import { SelectionModel } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
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
  constructor(private readonly http: HttpClient, private dialog: MatDialog) {}

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

  customer: ICutomer = {
    position: 0,
    id: '',
    name: '',
    phone: '',
    email: '',
    neighborhood: '',
    city: '',
    state: '',
  };

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: this.customer,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.customer = result;
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
    });
  }

  ngOnInit(): void {
    this.getCustomers();
  }
}

@Component({
  selector: 'dialog.component',
  templateUrl: 'dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogOverviewExampleDialog implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<CustomerReportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICutomer
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
