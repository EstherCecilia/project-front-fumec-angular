import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiURL = 'https://viacep.com.br/ws';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  constructor(private readonly http: HttpClient) {}

  address: { [key: string]: string } = {};

  getAddress(cep: string | null | undefined) {
    this.http.get(`${apiURL}/${cep}/json/`).subscribe((res: any) => {
      this.address = res;
    });

    return this.address;
  }
}
