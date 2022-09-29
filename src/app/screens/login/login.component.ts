import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private readonly http: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {}

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {}

  login() {
    if (this.loginForm.valid) {
      this.http.post<any>('auth/login', this.loginForm.value).subscribe({
        next: (res) => {
          this.toastr.success('Login realizado com sucesso!');

          localStorage.setItem('token', res.access_token);

          this.router.navigate(['/app/home']);
        },
        error: (err) => {
          this.toastr.error('Usuario ou senha incorretos.');
        },
      });
    } else {
      this.toastr.warning('Preencha os campos corretamente');
    }
  }
}
