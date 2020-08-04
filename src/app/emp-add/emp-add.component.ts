import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Emp } from '../Emp.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css']
})
export class EmpAddComponent implements OnInit {
//empservice1:EmpService;
e:Emp =
{
  eid:0,
  ename:"",
  etype:true,
  salary:0,
  doj:new Date()
}

 employees:Emp[];

  constructor(private empservice:EmpService,private http:HttpClient) { }
   
  ngOnInit() {
  }

  AddEmp()
  {
    // this.e.eid=1001;
     //this.e.ename="Valli";
    //this.e.etype=true;
    //this.e.salary=78000;
    //this.e.doj=new Date("6/7/2020");
 // this.empservice.AddEmploye(this.e);
 //this.employees=this.empservice.emps;
//  this.empservice.AddEmploye(this.e).subscribe(res=>{
//   alert(" Transaction successfull");
//  },err=>{"Error:----"+console.log(err)}
// )
  //console.log(this.emps.length);
  const httpHeaders = {headers:new HttpHeaders({'Content-Type': 'application/json'}) };
console.log(this.e);

  return this.http.post('http://localhost:27568/api/emps',this.e).subscribe(
    res=>{alert('done');
  },
  err=>{"Error: "+console.log(err)}
 )
}
}


