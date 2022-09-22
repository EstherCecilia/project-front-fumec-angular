import { NgModule } from '@angular/core';
import { RadarChartComponent } from './radar-chart.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RadarChartComponent],
  imports: [CommonModule, RouterModule],
  exports: [RadarChartComponent],
})
export class RadarChartModule {}
