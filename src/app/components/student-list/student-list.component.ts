import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  students: Student[];
  constructor(private studentService: StudentService) {
    // this.students = studentService.getStudents();
  }
  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getStudents().subscribe((students) => {
      this.students = students;
    });
  }

  deleteStudent(studentId: number): void {
    this.studentService.deleteStudent(studentId).subscribe((student) => {
      this.loadStudents();
    });
  }
}
