import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Employee } from "./Employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  private baseUrl : String = "http://localhost:8082/api/v1/employees2";
  getEmployeeList():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseUrl}`);
  }

  // createEmployee
  
}
