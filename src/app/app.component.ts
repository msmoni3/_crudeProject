import { Component, VERSION } from '@angular/core';
import { EmpservicesService } from './empservices.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(private empservice:EmpservicesService){

  }
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
      this.empservice.savedata(this.employeeDetail).subscribe((res)=>{
        console.log(res)
      })

  }

  delete(){

  }
}
