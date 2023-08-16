import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})


export class EmpListComponent implements OnInit{
  
employees : Employee[] | undefined
  constructor(private employeeService : EmployeeService , private router:Router) { }

  ngOnInit(): void {
    this.getEmployee();
    console.log(this.getEmployee);
    }
    private getEmployee(){
      this.employeeService.getEmployeeList().subscribe(data => {
        this.employees=data;
      });
    }
    
}
