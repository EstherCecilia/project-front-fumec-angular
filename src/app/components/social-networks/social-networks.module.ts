import { NgModule } from '@angular/core';
import { SocialNetworksComponent } from './social-networks.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [SocialNetworksComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [SocialNetworksComponent],
})
export class SocialNetworksModule {}
