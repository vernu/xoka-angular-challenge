import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  students: Student[];

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('/api/students');
  }
  registerStudent(studentData: Student): Observable<Student> {
    return this.http.post<Student>('/api/students', studentData);
  }

  updateStudent(studentId: number, studentData:Student): Observable<Student> {
    return this.http.put<Student>(`/api/students/${studentId}`, studentData);
  }

  deleteStudent(studentId): Observable<Student> {
    console.log(studentId);
    return this.http.delete<Student>(`/api/students/${studentId}`);
  }
}
