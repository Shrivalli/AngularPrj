import { Injectable } from '@angular/core';
import { Emp } from './Emp.model';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
    readonly rooturl=" https://localhost:44343/api/Emps";
    emps:Emp[]=[]; //list of objects
  constructor(private http:HttpClient) {
  //  let e:Emp =
  //  {
  //    eid:0,
  //    ename:"",
  //    etype:true,
  //    salary:0,
  //    doj:new Date()
  //  }
  }
 
  getEmployees():Observable<Emp[]>
     {
     // this.http.get(this.rooturl+'/Emps')
      //.toPromise().then(res=>this.emps=res as Emp[]);
      return this.http.get<Emp[]>(this.rooturl);
     }

  AddEmploye(e1:Emp):any{
   this.emps.push(e1);
    console.log(this.emps.length);
  }
}
