import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from '../models/test';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  tests: Test[];
  constructor(private http: HttpClient) {}

  getTests(): Observable<Test[]> {
    return this.http.get<Test[]>('/api/tests');
  }

  addTest(testData): Observable<Test[]> {
    return this.http.post<Test[]>('/api/tests', testData);
  }

  deleteTest(testId: number): Observable<Test> {
    return this.http.delete<Test>(`/api/tests/${testId}`);
  }
}
