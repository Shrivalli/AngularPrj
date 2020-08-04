import { Injectable } from '@angular/core';
import { Emp } from './Emp.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

// const reqheader=new HttpHeaders().append('Content-Type','application/json')
// .append('Accept','application/json');


@Injectable({
  providedIn: 'root'
})


export class EmpService {
  
 
    readonly rooturl="http://localhost:27568/api";
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
      return this.http.get<Emp[]>(this.rooturl+'/emps');
     }

  delemp(eid:number)
  {
  return this.http.delete(this.rooturl+'/emps/'+eid);
  }

  AddEmploye(e1:Emp)
  {
   const httpHeaders = {headers:new HttpHeaders({'Content-Type': 'application/json'}) };
    return this.http.post(this.rooturl+'/emps',e1,httpHeaders);
  }

  editemp(e1:Emp)
  {
    console.log(e1.eid)
    const httpHeaders = {headers:new HttpHeaders({'Content-Type': 'application/json'}) };
    return this.http.put(this.rooturl+'/emps/'+e1.eid,e1,httpHeaders);
  }

  retrieveemp(eid:number):Observable<Emp>  
  {
   return this.http.get<Emp>(this.rooturl+'/emps/'+eid);
  }
}
