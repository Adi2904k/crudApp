import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent  implements OnInit {
  employees!: Employee[] ;
  constructor(private http: HttpClient , private router:Router, private employeeService : EmployeeService) {
  }
  ngOnInit(): void {
      this.getEmployees();
  }
  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data =>{
      this.employees = data;
    });
  }
  updateEmployee(id: number){
    this.router.navigate(['update-Employee', id])
  }
  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(data =>{
      console.log(data); 
      this.getEmployees();
    })
  }
  EmployeeDetail(id : number){
    this.router.navigate(['Employee-Detail', id])
  }
}
