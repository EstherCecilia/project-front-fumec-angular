import { SelectionModel } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

export interface ICutomer {
  position: number;
  id: number;
  name: string;
  phone: string;
  email: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
}

@Component({
  selector: 'app-customer-report',
  templateUrl: './customer-report.component.html',
  styleUrls: ['./customer-report.component.css'],
})
export class CustomerReportComponent implements OnInit {
  constructor(private readonly http: HttpClient) {}

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
