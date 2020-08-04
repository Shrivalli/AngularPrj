import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { HttpClientModule } from '@angular/common/http';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpeditComponent } from './empedit/empedit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SampleComponent,
    EmpAddComponent,
    EmplistComponent,
    EmpeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
