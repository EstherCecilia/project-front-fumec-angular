import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BaseModule } from 'src/app/components/base/base.module';
import { LineChartModule } from 'src/app/components/line-chart/line-chart.module';
import { BarChartModule } from 'src/app/components/bar-chart/bar-chart.module';
import { PieChartModule } from 'src/app/components/pie-chart/pie-chart.module';
import { RadarChartModule } from 'src/app/components/radar-chart/radar-chart.module';

@NgModule({
  declarations: [DashboardComponent],
  providers: [],
  imports: [
    CommonModule,
    BaseModule,
    LineChartModule,
    BarChartModule,
    PieChartModule,
    RadarChartModule,
    RouterModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
    ]),
  ],
})
export class DashboardModule {}
