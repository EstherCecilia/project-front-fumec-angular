import { NgModule } from '@angular/core';
import { RegisterCourseComponent } from './register-course.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BaseModule } from 'src/app/components/base/base.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterCourseComponent],
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
        component: RegisterCourseComponent,
      },
    ]),
  ],
})
export class RegisterCourseModule {}
