import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LabAssignmentAngular1.2';
  onClickSubmit(result:any) {
    alert(result.ID + " "+result.Name +" "+ result.Salary +" " +result.Department);
 }
}
