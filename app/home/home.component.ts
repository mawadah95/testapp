import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = 'Test';
  currentVal="";
  getVal(Val: string)
  {
    console.warn(Val)
    this.currentVal=Val
  }
}
