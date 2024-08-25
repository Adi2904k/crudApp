import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './Employee/Employee.component';
import { AddEmployeeComponent } from './add-Employee/add-Employee.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

export const routes: Routes = [
    { path: '', redirectTo: 'Employee', pathMatch: "full"},
    { path: 'Employee', component: EmployeesComponent },
    { path: 'Employee-list', component: EmployeeListComponent },
    {path:'create-Employee', component:EmployeeCreateComponent},
    {path:'update-Employee/:id', component:EmployeeUpdateComponent},
    {path:'Employee-Detail/:id', component:EmployeeDetailsComponent},
    { path:'addEmployee',component:AddEmployeeComponent},
    { path: 'login',component:LoginComponent},
    {path:'edit-employee/:id',component:EditEmployeeComponent},
    {path:'register',component:RegisterComponent}

];


@NgModule({

    imports: [RouterModule.forRoot(routes),],

    exports: [RouterModule]

})

export class AppRoutingModule { }