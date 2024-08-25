import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Subscriber } from 'rxjs';
import { environment } from '../../environments/envitonment';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrl: './employee-create.component.scss'
})
export class EmployeeCreateComponent implements OnInit {

  
 employee: Employee = new Employee();
  constructor(private http: HttpClient , private router:Router , private employeeService: EmployeeService){

  }
  ngOnInit(): void {
}
// employee = {
//   id:0,
//   firstName: '',
//   lastName: '',  
//   emailId:'',
// }
saveEmployee(){
  this.employeeService.createEmployee(this.employee).subscribe(data =>{
    console.log(data);
    this.gotoEmployeeList()
  },
  error =>console.log(error));
}
gotoEmployeeList(){
  this.router.navigate(['/Employee-list']);
}
onSubmit(){
  console.log(this.employee);
  this.saveEmployee();


}


}
