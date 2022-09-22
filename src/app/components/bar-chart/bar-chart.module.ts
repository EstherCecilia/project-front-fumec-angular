import { NgModule } from '@angular/core';
import { BarChartComponent } from './bar-chart.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BarChartComponent],
  imports: [CommonModule, RouterModule],
  exports: [BarChartComponent],
})
export class BarChartModule {}
