import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;



  employeeDetail= [
    {
    id :'e1',
    fname : 'moni',
    lname : 'singh',
    city : 'hyderabad'
  },
  {
    id :'e2',
    fname : 'moni',
    lname : 'singh',
    city : 'hyderabad'
  },
  ]


  addinfo(id , fname, lname , city){
    
    this.employeeDetail.push({id , fname, lname , city })
    console.log("without value" ,id , fname, lname , city)

  }

  saveinfo(){

  }


  delete(){

  }
}
