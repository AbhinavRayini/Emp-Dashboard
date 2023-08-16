import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sort-att',
  templateUrl: './sort-att.component.html',
  styleUrls: ['./sort-att.component.css']
})
export class SortAttComponent {
  
  employees : any;
  sortDirection = 1;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8082/api/v1/employees2").subscribe(data => {
      this.employees = data;
    });
    }


  sort(property: string) {
    this.employees.sort((a: { [x: string]: any; }, b: { [x: string]: any; }) => {
      const aValue = a[property];
      const bValue = b[property];
      if (aValue < bValue) {
        return -this.sortDirection;
      } else if (aValue > bValue) {
        return this.sortDirection;
      } else {
        return 0;
      }
    });
    this.sortDirection = -this.sortDirection;
  }
}

// employees : Employee[] | undefined
//   constructor(private employeeService : EmployeeService , private router:Router) { }

//   ngOnInit(): void {
//     this.getEmployee();
//     console.log(this.getEmployee);
//     }
//     private getEmployee(){
//       this.employeeService.getEmployeeList().subscribe(data => {
//         this.employees=data;
//       });
//     }
    
