import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrl: './employee-update.component.scss'
})
export class EmployeeUpdateComponent implements OnInit {
  employee: Employee = new Employee();
  id!: number;
  constructor(private http: HttpClient , private router:Router, private employeeService : EmployeeService,private route : ActivatedRoute) {
  }
  ngOnInit(): void{
    this.id=this.route.snapshot.params['id']
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data
    },error => console.log(error)
  )

  }
  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data =>{
      this.gotoEmployeeList();
    },error => console.log(error));
  }
  gotoEmployeeList(){
    this.router.navigate(['/Employee-list']);
  }
}
