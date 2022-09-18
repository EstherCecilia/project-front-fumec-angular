import { NgModule } from '@angular/core';
import { CoursesReportComponent } from './courses-report.component';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { BaseModule } from 'src/app/components/base/base.module';

@NgModule({
  declarations: [CoursesReportComponent],
  providers: [],
  imports: [
    CommonModule,
    RouterModule,
    BaseModule,
    MatTableModule,
    MatCheckboxModule,
    RouterModule.forChild([
      {
        path: '',
        component: CoursesReportComponent,
      },
    ]),
  ],
})
export class CoursesReportModule {}
