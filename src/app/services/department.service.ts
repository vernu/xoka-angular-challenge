import { Injectable } from '@angular/core';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor() {}

  departments: Department[] = [
    {
      name: 'Computer Science',
    },
    {
      name: 'Accounting',
    },
  ];

  getDepartments(): Department[] {
    return this.departments;
  }
}
