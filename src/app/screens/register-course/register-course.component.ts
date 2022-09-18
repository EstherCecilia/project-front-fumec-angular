import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-course',
  templateUrl: './register-course.component.html',
  styleUrls: ['./register-course.component.css'],
})
export class RegisterCourseComponent implements OnInit {
  constructor(
    private readonly http: HttpClient,
    private fb: FormBuilder,
    private router: Router
  ) {}
  registerForm = this.fb.group({
    name: '',
    teacher: '',
    duration: '',
    shift: '',
    description: '',
    price: '',
  });

  ngOnInit(): void {}

  register() {
    console.log(this.registerForm.value);
  }
}
