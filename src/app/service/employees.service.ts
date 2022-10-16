import { HttpClient } from "@angular/common/http";
import { Employee } from "../Models/employee.model";
import { Injectable } from "@angular/core";
import { Observable, observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    baseUrl = 'https://localhost:7181/api/Employee'
    constructor(private http: HttpClient) { }


    // Get Employees
    GetAllEmployees(): Observable<Employee[]> {

        return this.http.get<Employee[]>(this.baseUrl);
    }


    // Add new Employee
    CreateNewEmployee(employee: Employee): Observable<Employee> {


        return this.http.post<Employee>(this.baseUrl, employee)
    }


    // Delete Employee
    DeleteEmployee(id: number): Observable<Employee> {

        return this.http.delete<Employee>(this.baseUrl + '/' + id)
    }


    // Update Employee
    UpdateEmployee(employee: Employee): Observable<Employee> {
        return this.http.put<Employee>(this.baseUrl + '/' + employee.employeeID, employee)
    }
}