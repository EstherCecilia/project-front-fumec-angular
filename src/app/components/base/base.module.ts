import { NgModule } from '@angular/core';
import { BaseComponent } from './base.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BaseComponent],
  imports: [CommonModule, RouterModule],
  exports: [BaseComponent],
})
export class BaseModule {}
