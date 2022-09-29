import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-course',
  templateUrl: './register-course.component.html',
  styleUrls: ['./register-course.component.css'],
})
export class RegisterCourseComponent implements OnInit {
  constructor(
    private readonly http: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
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
          this.toastr.success('Cadastro realizado com sucesso!');

          this.router.navigate(['/app/home']);
        },
        error: (err) => {
          this.toastr.error(err?.message);
        },
      });
    } else {
      this.toastr.warning('Preencha os campos corretamente');
    }
  }
}
