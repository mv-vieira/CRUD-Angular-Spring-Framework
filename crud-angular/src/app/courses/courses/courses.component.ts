import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { CoursesService } from './../services/courses.service';
import { Course } from './../model/course';
import { Component } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses$: Observable <Course[]>;
  displayedColumns = ['name' , 'category'];

  // coursesService : CoursesService;git
  constructor(
    private coursesService : CoursesService,
    public dialog: MatDialog ) {
    this.courses$ = coursesService.list().pipe(
      catchError(error =>{
        this.onError('Erro ao carregar cursos.');
        return of([])
      })
    );
   }

   onError(errorMsg: string){
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
   }
}
