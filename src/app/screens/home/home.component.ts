import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

type Course = {
  label: string;
  value: string;
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private readonly http: HttpClient,
    private fb: FormBuilder,
    private router: Router
  ) {}

  courses: Course[] = [
    { label: 'Ciências da computação', value: 'computer science' },
  ];

  registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    zipCode: ['', Validators.required],
  });

  ngOnInit(): void {}

  register() {
    if (this.registerForm.valid) {
      this.http.post<any>('leads', this.registerForm.value).subscribe({
        next: (res) => {
          alert('Cadastro realizado com sucesso!');

          this.router.navigate(['/home']);
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
