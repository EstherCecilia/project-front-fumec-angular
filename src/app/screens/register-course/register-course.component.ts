import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    name: ['', Validators.required],
    teacher: ['', Validators.required],
    duration: ['', Validators.required],
    shift: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
  });

  ngOnInit(): void {}

  register() {
    if (this.registerForm.valid) {
      this.http.post<any>('course', this.registerForm.value).subscribe({
        next: (res) => {
          alert('Cadastro realizado com sucesso!');

          this.router.navigate(['/app/home']);
        },
        error: (err) => {
          alert(err?.message);
        },
      });
    } else {
      alert('Preencha os campos corretamente');
    }
  }
}
