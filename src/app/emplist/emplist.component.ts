import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Emp } from '../Emp.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
results:Emp[];
  constructor(private empservice:EmpService) { }

  ngOnInit() {
  }

  ShowEmployees(){
this.empservice.getEmployees().subscribe(data=>
  {
    {{debugger}}
    this.results=data;
    console.log(data);
  })
  }

  
}
