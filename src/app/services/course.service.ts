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
  addCourse(courseData): Observable<Course> {
    return this.http.post<Course>('/api/courses', courseData);
  }
  deleteCourse(courseId: number): Observable<Course> {
    return this.http.delete<Course>(`/api/courses/${courseId}`);
  }
}
