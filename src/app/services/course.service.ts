import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  courses: Course[];

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('/api/courses');
  }
  deleteCourse(courseId): Observable<Course> {
    return this.http.delete<Course>(`/api/courses/${courseId}`);
  }
}
