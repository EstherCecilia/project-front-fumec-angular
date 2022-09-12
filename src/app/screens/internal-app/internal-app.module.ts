import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InternalAppComponent } from './internal-app.component';
import { CourseModule } from './course/course.module';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    InternalAppComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild([
      {
        path: '',
        component: InternalAppComponent,
        children: [
          {
            path: 'courses',
            loadChildren: () => CourseModule 
          }
        ]
      }
    ])
  ]
})
export class InternalAppModule { }
