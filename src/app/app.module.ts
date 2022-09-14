import { LoginModule } from './screens/login/login.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './screens/register/register.component';
import { HomeComponent } from './screens/home/home.component';
import { BaseComponent } from './components/base/base.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterCourseComponent } from './screens/register-course/register-course.component';
import { CustomerReportComponent } from './screens/customer-report/customer-report.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CoursesReportComponent } from './screens/courses-report/courses-report.component';
import { ReportsComponent } from './screens/reports/reports.component';
import { SocialNetworksComponent } from './components/social-networks/social-networks.component';
import { HomeAppComponent } from './screens/home-app/home-app.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    BaseComponent,
    HomeComponent,
    RegisterCourseComponent,
    CustomerReportComponent,
    CoursesReportComponent,
    ReportsComponent,
    SocialNetworksComponent,
    HomeAppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatTableModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
