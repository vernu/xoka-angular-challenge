import { Injectable } from '@angular/core';
import { Test } from '../models/test';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor() {}

  tests: Test[] = [
    {
      title: 'test 1',
      content: 'test 1 content',
      percentage: 15,
    },

    {
      title: 'test 2',
      content: 'test 2 content',
      percentage: 20,
    },

    {
      title: 'test 3',
      content: 'test 3 content',
      percentage: 25,
    },

    {
      title: 'test 4',
      content: 'test 4 content',
      percentage: 30,
    },
  ];

  getTests(): Test[] {
    return this.tests;
  }
}
