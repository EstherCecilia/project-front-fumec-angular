import { NgModule } from '@angular/core';
import { PieChartComponent } from './pie-chart.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PieChartComponent],
  imports: [CommonModule, RouterModule],
  exports: [PieChartComponent],
})
export class PieChartModule {}
