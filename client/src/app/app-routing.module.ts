import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

export const routes: Routes = [
    { path: '', redirectTo: 'Employee-list', pathMatch: "full"},
    { path: 'Employee-list', component: EmployeeListComponent },
    {path:'create-Employee', component:EmployeeCreateComponent},
    {path:'update-Employee/:id', component:EmployeeUpdateComponent},
    {path:'Employee-Detail/:id', component:EmployeeDetailsComponent},


];


@NgModule({

    imports: [RouterModule.forRoot(routes),],

    exports: [RouterModule]

})

export class AppRoutingModule { }