import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'signup',
    loadChildren: () =>
      import('./screens/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./screens/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'app',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./screens/home-app/home-app.module').then(
            (m) => m.HomeAppModule
          ),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./screens/register-course/register-course.module').then(
            (m) => m.RegisterCourseModule
          ),
      },
      {
        path: 'report',
        loadChildren: () =>
          import('./screens/reports/reports.module').then(
            (m) => m.ReportsModule
          ),
      },
      {
        path: 'customer-report',
        loadChildren: () =>
          import('./screens/customer-report/customer-report.module').then(
            (m) => m.CustomerReportModule
          ),
      },
      {
        path: 'courses-report',
        loadChildren: () =>
          import('./screens/courses-report/courses-report.module').then(
            (m) => m.CoursesReportModule
          ),
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
