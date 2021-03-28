import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
})
export class DepartmentListComponent implements OnInit {
  departments: Department[];
  constructor(
    private departmentService: DepartmentService,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments() {
    this.departmentService.getDepartments().subscribe((departments) => {
      this.departments = departments;
    });
  }

  deleteDepartment(depId: number) {
    this.departmentService.deleteDepartment(depId).subscribe((department) => {
      this.loadDepartments();
      this._snackBar.open('Deparment removed', 'okay', {
        duration: 2000,
      });
    });
  }
}
