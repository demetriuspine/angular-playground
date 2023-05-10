import { Component } from '@angular/core';
import studentsData from '../../students.json';
import { IStudent } from 'src/app/models/student.interface';

@Component({
  selector: 'app-manipulando-json',
  templateUrl: './manipulando-json.component.html',
  styleUrls: ['./manipulando-json.component.css']
})
export class ManipulandoJsonComponent {
  private students: IStudent[] = studentsData;

  public getStudents(): IStudent[] {
    return this.students;
  }

  ngOnInit(): void {
    console.log(this.students);
  }
}
