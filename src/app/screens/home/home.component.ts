import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { CepService } from 'src/app/services/cep.service';

type Course = {
  label: string;
  id: number;
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  filteredCourses!: Observable<string[]>;
  constructor(
    private readonly http: HttpClient,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private cepService: CepService
  ) {}
  control = new FormControl('');
  courses: Course[] = [];

  registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    zipCode: ['', Validators.required],
    number: '',
  });

  getCourses() {
    this.http.get<any>('course').subscribe({
      next: (res) => {
        this.courses = res.map((course: { id: number; name: string }) => ({
          id: course.id,
          label: course.name,
        }));
      },
    });
  }

  ngOnInit(): void {
    this.getCourses();
    this.filteredCourses = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.courses
      .filter(({ label }) => this._normalizeValue(label).includes(filterValue))
      .map((item) => item.label);
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  register() {
    const address = this.cepService.getAddress(this.registerForm.value.zipCode);

    if (!address) {
      this.toastr.warning('Cep inválido!');
      return;
    }

    if (this.registerForm.valid && this.control.value) {
      const courseId = this.courses.find(
        (course) => course.label === this.control.value
      )?.id;

      const payload = {
        ...this.registerForm.value,
        neighborhood: address['bairro'],
        city: address['localidade'],
        state: address['uf'],
        address: address['logradouro'],
        courseId,
      };

      this.http.post<any>('leads', payload).subscribe({
        next: (res) => {
          this.toastr.success('Cadastro realizado com sucesso!');

          this.registerForm.reset();
          this.control.reset();
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
