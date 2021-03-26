import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/models/test';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css'],
})
export class TestListComponent implements OnInit {
  tests: Test[];
  constructor(private testService: TestService) {
    this.tests = testService.getTests();
  }

  ngOnInit(): void {}
}
