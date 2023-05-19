import { Component } from '@angular/core';
import studentsData from '../../students.json';
import { IStudent } from 'src/app/models/student.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manipulando-json',
  templateUrl: './manipulando-json.component.html',
  styleUrls: ['./manipulando-json.component.css']
})
export class ManipulandoJsonComponent {
  private students: IStudent[] = studentsData;

  constructor(private router: Router) { }

  public getStudents(): IStudent[] {
    return this.students;
  }

  ngOnInit(): void {
    console.log(this.students);
  }

  goToDetail(student: IStudent) {
    this.router.navigate(['detail', student.id]);
  }
}
