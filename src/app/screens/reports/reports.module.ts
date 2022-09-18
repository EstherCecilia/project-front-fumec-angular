import { NgModule } from '@angular/core';
import { ReportsComponent } from './reports.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BaseModule } from 'src/app/components/base/base.module';
import { SocialNetworksModule } from 'src/app/components/social-networks/social-networks.module';

@NgModule({
  declarations: [ReportsComponent],
  providers: [],
  imports: [
    CommonModule,
    RouterModule,
    BaseModule,
    SocialNetworksModule,
    FontAwesomeModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReportsComponent,
      },
    ]),
  ],
})
export class ReportsModule {}
