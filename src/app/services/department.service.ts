import { Injectable } from '@angular/core';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor() {}

  departments: Department[] = [
    {
      code: 'cs',
      name: 'Computer Science',
    },
    {
      code: 'acc',
      name: 'Accounting',
    },
  ];

  getDepartments(): Department[] {
    return this.departments;
  }
}
