import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  departments: Department[];
  constructor(private http: HttpClient) {}

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>('/api/departments');
  }

}
