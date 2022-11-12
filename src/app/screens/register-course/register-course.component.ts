import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {}
  title = 'Cadastrar';
  registerForm = this.fb.group({
    name: ['', Validators.required],
    teacher: ['', Validators.required],
    duration: ['', Validators.required],
    shift: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
  });

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.title = 'Editar';
      this.http.get<any>(`course/${id}`).subscribe({
        next: (resp) => {
          const res = {
            position: 0,
            id: 1,
            name: 'Ciências da computação',
            teacher: 'Emerson',
            duration: '4',
            description: 'Pois é...',
            shift: 'Noite',
            price: '1000000',
          };

          this.registerForm.controls['name'].setValue(res.name);
          this.registerForm.controls['teacher'].setValue(res.teacher);
          this.registerForm.controls['duration'].setValue(res.duration);
          this.registerForm.controls['shift'].setValue(res.shift);
          this.registerForm.controls['description'].setValue(res.description);
          this.registerForm.controls['price'].setValue(res.price);
        },
      });
    }
  }

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
