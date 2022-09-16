import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesReportComponent } from './courses-report.component';

describe('CoursesReportComponent', () => {
  let component: CoursesReportComponent;
  let fixture: ComponentFixture<CoursesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
