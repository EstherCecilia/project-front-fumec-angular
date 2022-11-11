import { NgModule } from '@angular/core';
import { CustomerEditComponent } from './customer-edit.component';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BaseModule } from 'src/app/components/base/base.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomerEditComponent],
  providers: [],
  imports: [
    CommonModule,
    RouterModule,
    BaseModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CustomerEditComponent,
      },
    ]),
  ],
})
export class CustomerEditModule {}
