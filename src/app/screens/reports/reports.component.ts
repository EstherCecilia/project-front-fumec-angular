import { Component, OnInit } from '@angular/core';
import { faUsers, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
})
export class ReportsComponent implements OnInit {
  faUsers = faUsers;
  faGraduationCap = faGraduationCap;

  constructor() {}

  ngOnInit(): void {}
}
