import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css'],
})
export class CustomerEditComponent implements OnInit {
  constructor(
    private readonly http: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {}
  registerForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],
    zipcode: ['', Validators.required],
    number: ['', Validators.required],
  });

  ngOnInit(): void {
    const id: string = this.activatedRoute.snapshot.paramMap.get('id') || '0';

    this.http.get<any>(`leads/${id}`).subscribe({
      next: (res) => {
        this.registerForm.controls['name'].setValue(res.name);
        this.registerForm.controls['phone'].setValue(res.phone);
        this.registerForm.controls['email'].setValue(res.email);
        this.registerForm.controls['zipcode'].setValue(res.zipcode);
      },
    });
  }

  register() {}
}
