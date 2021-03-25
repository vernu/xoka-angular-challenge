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
        code: 'cs',
        name: 'Computer Science',
      },
    },
    {
      name: 'helen',
      sex: 'female',

      department: {
        code: 'acc',
        name: 'Accounting',
      },
    },
  ];

  getStudents(): Student[] {
    return this.students;
  }
}
