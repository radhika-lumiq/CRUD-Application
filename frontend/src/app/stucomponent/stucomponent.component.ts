import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stucomponent',
  templateUrl: './stucomponent.component.html',
  styleUrls: ['./stucomponent.component.css']
})
export class StucomponentComponent {



     name : string ="";
     Roll_no : string="";
     course : string="";
     Address : string="";
     phone : string="";

     constructor(private http: HttpClient) {}
      register(){
        let bodydata = {
        "name" : this.name,
        "roll" : this.Roll_no,
        "course" : this.course, 
        "address" : this.Address,
        "phone" : this.phone,
      };

      this.http.post("http://localhost:9000/students/",bodydata).subscribe((resultdata : any)=>
      {
        console.log(resultdata);
        alert("Student registered successfully!");
        // this.getAllStudent();
        this.name = '';
        this.Roll_no = '';
        this.course = ''; 
        this.Address = '';
        this.phone = '' ;
      },
      (error: any) => {
        console.log(error);
        alert("An error occurred while registering the student.");
      }
      );
    }
}
