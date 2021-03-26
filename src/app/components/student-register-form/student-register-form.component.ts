import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-student-register-form',
  templateUrl: './student-register-form.component.html',
  styleUrls: ['./student-register-form.component.css'],
})
export class StudentRegisterFormComponent implements OnInit {
  allDepartments: Department[];

  name: String;
  department: Department;

  constructor(private departmentService: DepartmentService) {
    this.allDepartments = departmentService.getDepartments();
  }

  ngOnInit(): void {}

  registerStudent() {
    console.log(this.name);
  }
}
