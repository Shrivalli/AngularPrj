import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'My Angular Class';
  studentname="shrivalli";
  imagepath="assets/web.png";

  constructor()
  {}
  abc():any
  {
      console.log(this.studentname);
  }
  ngOnInit() {
  }

}
