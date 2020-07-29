import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SampleComponent } from './sample/sample.component';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { EmplistComponent } from './emplist/emplist.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
{
  path:'register',
  component:RegisterComponent
},
{
  path:'sample',
  component:SampleComponent
},
{
  path:'AddEmployee',
  component:EmpAddComponent
},
{
  path:'ShowEmployees',
  component:EmplistComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
