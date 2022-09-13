import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './screens/register/register.component';
import { HomeComponent } from './screens/home/home.component';
import { RegisterCourseComponent } from './screens/register-course/register-course.component';
import { CustomerReportComponent } from './screens/customer-report/customer-report.component';
import { CoursesReportComponent } from './screens/courses-report/courses-report.component';

const routes: Routes = [
  { path: 'signup', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'app',
    children: [
      {
        path: 'register',
        component: RegisterCourseComponent,
      },
      {
        path: 'customer-report',
        component: CustomerReportComponent,
      },
      {
        path: 'courses-report',
        component: CoursesReportComponent,
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./screens/login/login.module').then((m) => m.LoginModule),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
