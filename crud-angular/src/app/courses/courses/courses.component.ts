import { CoursesService } from './../services/courses.service';
import { Course } from './../model/course';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses$: Observable <Course[]>;
  displayedColumns = ['name' , 'category'];

  // coursesService : CoursesService;git
  constructor(private coursesService : CoursesService ) {
    this.courses$ = coursesService.list();
   }
}
