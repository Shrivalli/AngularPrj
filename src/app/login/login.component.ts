import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
stuname:string;
stupwd:string;
  constructor() 
  {
    this.stuname="Shrivalli";
    this.stupwd="abcdef";
  }

  ngOnInit() {
  }

}
