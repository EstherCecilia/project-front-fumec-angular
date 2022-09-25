import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

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
    private router: Router
  ) {}
  control = new FormControl('');
  courses: Course[] = [];

  registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    zipCode: ['', Validators.required],
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
    if (this.registerForm.valid && this.control.value) {
      const courseId = this.courses.find(
        (course) => course.label === this.control.value
      )?.id;

      const payload = {
        ...this.registerForm.value,
        courseId,
      };

      this.http.post<any>('leads', payload).subscribe({
        next: (res) => {
          alert('Cadastro realizado com sucesso!');

          this.registerForm.reset();
          this.control.reset();
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
