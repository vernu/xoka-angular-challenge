import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MemoryDbApi implements InMemoryDbService {
  createDb() {
    let students = [
      {
        id: 1,
        name: 'isra el',
        sex: 'male',
        department: {
          id: 1,
          name: 'Computer Science',
        },
      },
      {
        id: 2,
        name: 'meron',
        sex: 'female',

        department: {
          id: 2,
          name: 'Accounting',
        },
      },
    ];
    let departments = [
      {
        id: 1,
        name: 'Computer Science',
      },
      {
        id: 2,
        name: 'Accounting',
      },
    ];

    let courses = [
      {
        id: 1,
        name: 'OOSAD',
        creditHours: 4,
        contactHours: 5,
      },
    ];

    let tests = [
      {
        id: 1,
        title: 'test 1',
        content: 'test 1 content',
        percentage: 15,
      },

      {
        id: 2,
        title: 'test 2',
        content: 'test 2 content',
        percentage: 20,
      },

      {
        id: 3,
        title: 'test 3',
        content: 'test 3 content',
        percentage: 25,
      },

      { id: 4, title: 'test 4', content: 'test 4 content', percentage: 30 },
    ];

    return { students, departments, courses, tests };
  }
}
