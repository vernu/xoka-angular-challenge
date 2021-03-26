import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Test } from 'src/app/models/test';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css'],
})
export class TestListComponent implements OnInit {
  tests: Test[];
  constructor(
    private testService: TestService,
    private _snackBar: MatSnackBar
  ) {
    // this.tests = testService.getTests();
  }

  ngOnInit(): void {
    this.loadTests();
  }
  loadTests() {
    this.testService.getTests().subscribe((tests) => {
      this.tests = tests;
    });
  }

  deleteTest(testId: number): void {
    this.testService.deleteTest(testId).subscribe((test) => {
      this._snackBar.open('test deleted', 'okay', { duration: 2000 });
      this.loadTests();
    });
  }
}
