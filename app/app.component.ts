import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';

 // ourtext="";

 // myText(data: any)
  //{
   //alert(data);
  // this.ourtext=data;
  //  };

    currentVal="";
    getVal(Val: string)
    {
      console.warn(Val)
      this.currentVal=Val
    }

}
