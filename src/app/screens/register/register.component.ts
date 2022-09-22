import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

type Position = {
  label: string;
  value: string;
};
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private readonly http: HttpClient,
    private fb: FormBuilder,
    private router: Router
  ) {}

  positions: Position[] = [
    { label: 'Gerente', value: 'manager' },
    { label: 'Atendente', value: 'attendant' },
    { label: 'Desenvolvedor', value: 'developer' },
  ];

  registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    password_corfirm: '',
  });

  ngOnInit(): void {}

  register() {
    if (
      this.registerForm.value.password !==
      this.registerForm.value.password_corfirm
    ) {
      alert('As senhas não conferem');
      return;
    }

    if (this.registerForm.valid) {
      this.http
        .post<any>('rota-de-criacao', this.registerForm.value)
        .subscribe({
          next: (res) => {
            alert('Cadastro realizado com sucesso!');

            this.router.navigate(['/login']);
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
