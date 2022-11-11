import { NgModule } from '@angular/core';
import { CustomerReportComponent } from './customer-report.component';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { BaseModule } from 'src/app/components/base/base.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [CustomerReportComponent],
  providers: [],
  imports: [
    MatDialogModule,
    CommonModule,
    RouterModule,
    BaseModule,
    FontAwesomeModule,
    MatTableModule,
    MatCheckboxModule,
    RouterModule.forChild([
      {
        path: '',
        component: CustomerReportComponent,
      },
    ]),
  ],
})
export class CustomerReportModule {}
