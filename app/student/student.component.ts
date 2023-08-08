import { Component } from '@angular/core';

interface student{
  name:string;
  email:string;
  mark:number;

}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  studentdetail : any[] = [
    { name: 'student 1', email: 'email@email.com', mark:50},
    { name: 'student 2', email: 'email@email.com', mark:20}
  
  ];

}
