import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { StudentListComponent } from './components/student-list/student-list.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { StudentRegisterFormComponent } from './components/student-register-form/student-register-form.component';
import { FormsModule } from '@angular/forms';
import { TestListComponent } from './components/test-list/test-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MemoryDbApi } from './components/memory-db-api/memory-db-api';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    DepartmentListComponent,
    CourseListComponent,
    StudentRegisterFormComponent,
    TestListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,

    
   HttpClientModule,
   HttpClientInMemoryWebApiModule.forRoot(MemoryDbApi),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
