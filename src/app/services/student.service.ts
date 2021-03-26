import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  students: Student[] = [
    {
      name: 'isra el',
      sex: 'male',
      department: {
        name: 'Computer Science',
      },
    },
    {
      name: 'helen',
      sex: 'female',

      department: {
        name: 'Accounting',
      },
    },
  ];

  getStudents(): Student[] {
    return this.students;
  }
}
