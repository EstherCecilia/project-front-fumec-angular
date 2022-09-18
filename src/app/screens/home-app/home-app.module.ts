import { NgModule } from '@angular/core';
import { HomeAppComponent } from './home-app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SocialNetworksModule } from 'src/app/components/social-networks/social-networks.module';
import { BaseModule } from 'src/app/components/base/base.module';

@NgModule({
  declarations: [HomeAppComponent],
  providers: [],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    BaseModule,
    SocialNetworksModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeAppComponent,
      },
    ]),
  ],
})
export class HomeAppModule {}
