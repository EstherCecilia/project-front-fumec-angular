import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './screens/login/login.component';
import { RegisterComponent } from './screens/register/register.component';
import { HomeComponent } from './screens/home/home.component';
import { RegisterCourseComponent } from './screens/register-course/register-course.component';
import { CustomerReportComponent } from './screens/customer-report/customer-report.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: RegisterComponent },
  {
    path: 'app',
    children: [
      { path: 'register', component: RegisterCourseComponent },
      { path: 'report', component: CustomerReportComponent }
    ]
  },
  {
    path: 'internal-app',
    loadChildren: () => import('./screens/internal-app/internal-app.module').then(m => m.InternalAppModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./screens/login/login.module')
      .then(m => m.LoginModule),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
