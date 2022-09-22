import { NgModule } from '@angular/core';
import { LineChartComponent } from './line-chart.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LineChartComponent],
  imports: [CommonModule, RouterModule],
  exports: [LineChartComponent],
})
export class LineChartModule {}
