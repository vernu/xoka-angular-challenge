import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/services/department.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-register-form',
  templateUrl: './student-register-form.component.html',
  styleUrls: ['./student-register-form.component.css'],
})
export class StudentRegisterFormComponent implements OnInit {
  allDepartments: Department[];

  id: number;
  name: String;
  sex: String;
  department: Department;
  departmentId: number;

  constructor(
    private departmentService: DepartmentService,
    private studentService: StudentService,
    private _snackBar: MatSnackBar
  ) {
    // this.allDepartments = departmentService.getDepartments();
  }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe((departments) => {
      this.allDepartments = departments;
    });
  }

  registerStudent(): void {
    this.studentService
      .registerStudent({
        id: this.id,
        name: this.name,
        sex: this.sex,
        department: {
          id: this.departmentId,
        },
      })
      .subscribe((student) => {
        this._snackBar.open('student registered', 'okay', { duration: 2000 });
      });
  }
}
