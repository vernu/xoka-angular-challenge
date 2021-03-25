import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  courses: Course[] = [
    {
      id: 'COSC105',
      name: 'OOSAD',
      creditHours: 4,
      contactHours: 5,
    },
  ];

  constructor() {}

  getCourses(): Course[] {
    return this.courses;
  }
}
