import { Component, OnInit } from '@angular/core';

export interface ICutomer {
  position: number;
  name: string;
  phone: string;
  email: string;
  neighborhood: string;
  city: string;
  state: string;
}

const ELEMENT_DATA: ICutomer[] = [
  {
    position: 1,
    name: 'Emily Sophie Lopes',
    phone: '(62) 99543-0902',
    email: 'emily.sophie.lopes@pronursing.com.br',
    neighborhood: 'Fazenda Coutos',
    city: 'Salvador',
    state: 'BA',
  },
  {
    position: 2,
    name: 'Allana Nicole Drumond',
    phone: '(71) 99198-5028',
    email: 'allana-drumond93@cuppari.com.br',
    neighborhood: 'Papillon Park - Complemento',
    city: 'Aparecida de Goiânia',
    state: 'GO',
  },
  {
    position: 3,
    name: 'Ayla Brenda Alice Baptista',
    phone: 'ayla_baptista@brf-br.com',
    email: 'ayla_baptista@brf-br.com',
    neighborhood: 'Ceilândia Norte (Ceilândia)',
    city: 'Brasília',
    state: 'DF',
  },
  {
    position: 4,
    name: 'ayla_baptista@brf-br.com',
    phone: '(88) 99187-5301',
    email: 'andreia.isabelle.aragao@marquesalcantra.comabdv.com.br',
    neighborhood: 'Pinto Madeira',
    city: 'Crato',
    state: 'CE',
  },
  {
    position: 5,
    name: 'Sophia Rosângela Catarina Martins',
    phone: '(91) 98595-6725',
    email: 'sophiarosangelamartins@edepbr.com.br',
    neighborhood: 'Uraim III',
    city: 'Paragominas',
    state: 'PA',
  },
];

@Component({
  selector: 'app-customer-report',
  templateUrl: './customer-report.component.html',
  styleUrls: ['./customer-report.component.css'],
})
export class CustomerReportComponent {
  displayedColumns: string[] = [
    'select',
    'position',
    'name',
    'phone',
    'email',
    'neighborhood',
    'city',
    'state',
  ];
  dataSource = ELEMENT_DATA;
  // constructor() {

  // }

  // ngOnInit(): void {}
}
