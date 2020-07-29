import { Component, OnInit } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { EmpService } from '../emp.service';
import { Emp } from '../Emp.model';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
names=['Vandhana','Ram','Arjun','Jagan','Radha','Sai']
isloggedin=false;
empsamples:Emp[]=[];
bdate=new Date("5/6/2020");
amt=90887;
//name=this.names[0];
  constructor(private empservice:EmpService) 
  {
this.empsamples=this.empservice.emps;
console.log(this.empservice.emps.length);
  }

  ngOnInit() {

  }

}
