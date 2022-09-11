import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(
    private readonly http: HttpClient,
    private fb: FormBuilder,
  ) { }

  loginForm = this.fb.group({
    username: '',
    password: '',
  });

  ngOnInit(): void { }

  login() {
    console.log(this.loginForm.value)
    this.http.post<any>('http://localhost:3000/auth/login', this.loginForm.value)
      .subscribe({
        next: (res) => {
          alert('Login realizado com sucesso!');
          localStorage.setItem('token', res.access_token)
        },
        error: err => {
          alert('Usuario ou senha incorretos.')
        }
      })

  }
}