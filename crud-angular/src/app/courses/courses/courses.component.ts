import { Course } from './../model/course';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses: Course[] = [
    {_id: "1", name: 'Angular', category: 'Front-End'},
    {_id: "2", name: 'Java', category:'Back-End'}
  ];
  displayedColumns = ['name' , 'category'];

  constructor() { }
}
