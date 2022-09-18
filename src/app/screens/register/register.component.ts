import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
    name: '',
    email: '',
    password: '',
    password_corfirm: '',
  });

  ngOnInit(): void {}

  register() {
    console.log(this.registerForm.value);
  }
}
