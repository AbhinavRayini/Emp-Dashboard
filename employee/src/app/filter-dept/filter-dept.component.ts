import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-filter-dept',
  templateUrl: './filter-dept.component.html',
  styleUrls: ['./filter-dept.component.css']
})
export class FilterDeptComponent implements OnInit {
 
  temp1: any;
  department:String='';
  constructor( private router: Router,private http:HttpClient) { }
  
  searchByDep(){

  if (this.department != "") {
    this.temp1 = this.temp1.filter((res: any) => {
      return res.department.toLowerCase().match(this.department.toLowerCase());

    })
  }

  else if (this.department = "") {

    this.temp1 = this.temp1.filter((res: any) => {
      return res.department.toLowerCase().match(this.department.toLowerCase());

    });
  }
  
  else {

    this.ngOnInit();

  }
}
ngOnInit(): void {
    this.http.get("http://localhost:8082/api/v1/employees2").subscribe(data => {
      this.temp1=data;
    });
  }
}

// ngOnInit(){

//   this.http.get("http://localhost:8080/employee").subscribe((data) => {



//     this.temp = data;

//     console.log(this.temp);

//   })

// }







// search: any ;
//   employees: any;
//   filteredEmployees!: any;

//   constructor(private http: HttpClient) { }

//   ngOnInit(): void {
//     this.http.get('/assets/mock_data.json').subscribe(data => {
//       this.employees = data;
//       this.filteredEmployees = data;
//     });
//   }

//   filterEmployees() {
//     if (!this.search) {
//       this.filteredEmployees = this.employees;
//       return;
//     }

//     this.filteredEmployees = this.employees.filter((employee: { department: string; }) => {
//       return employee.department.toLowerCase().includes(this.search.toLowerCase());
//     });
//   }





// employees!: Employee[];
// public filterdata!: Employee[];
// result: any;
// ngOnInit(): void {
//   this.getEmployee();
//   console.log(this.getEmployee);
// }
// constructor(private employeeService: EmployeeService, private router: Router) { }

// private getEmployee() {
//   this.employeeService.getEmployeeList().subscribe(data => {
//     this.employees = data;
//     this.filterdata = data;
//   });
// }







// employees!: Employee[];
// filteredData!: Employee[] ;
// data: any;
// filterValue !: any;
// constructor(private employeeService : EmployeeService , private router:Router) { }


//   applyFilter(filterValue1 : any) {
//     this.filteredData = this.data.filter((item: { department: string; }) =>
//       item.department.toLowerCase().includes(filterValue1.toLowerCase())

//     );
//     this.employees=this.filteredData;
//   }





