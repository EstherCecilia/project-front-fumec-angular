import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';

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
  filteredPositions!: Observable<string[]>;
  constructor(
    private readonly http: HttpClient,
    private fb: FormBuilder,
    private router: Router
  ) {}
  control = new FormControl('');
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

  ngOnInit(): void {
    this.filteredPositions = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.positions
      .filter(({ label }) => this._normalizeValue(label).includes(filterValue))
      .map((item) => item.label);
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

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
