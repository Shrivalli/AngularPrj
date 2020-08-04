import { Component, OnInit } from '@angular/core';
import { Emp } from '../Emp.model';
import { EmpService } from '../emp.service';


@Component({
  selector: 'app-empedit',
  templateUrl: './empedit.component.html',
  styleUrls: ['./empedit.component.css']
})
export class EmpeditComponent implements OnInit {
currentemp:Emp;
  constructor(private empservice:EmpService) { }

  ngOnInit() {
  }

  retrieve(eid:number)
  {
    
   this.empservice.retrieveemp(eid).subscribe(data=>
  {
    this.currentemp=data;
  },
  err=>{
    console.log(err)
  }
  )
  }
  EditEmp(e1:Emp)
  {
    this.empservice.editemp(this.currentemp).subscribe(data=>
      {
      alert(" Edit successfull")
      },
      err=>{"Error:----"+console.log(err)}
       )
      
  }


}
