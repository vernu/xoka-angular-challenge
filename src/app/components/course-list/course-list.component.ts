import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  courses: Course[];
  constructor(
    private courseService: CourseService,
    private _snackBar: MatSnackBar
  ) {
    // this.courses = courseService.getCourses();
  }

  ngOnInit(): void {
    this.loadCourses();
  }
  loadCourses() {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }

  deleteCourse(courseId: number): void {
    this.courseService.deleteCourse(courseId).subscribe((course) => {
      this.loadCourses();
      this._snackBar.open('course deleted', 'okay', { duration: 2000 });
    });
  }
}
