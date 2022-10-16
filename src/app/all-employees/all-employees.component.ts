import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/employee.model';
import { EmployeeService } from '../service/employees.service';


@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent {

  title = 'Labb2Angular';

  employees: Employee[] = [];

  employee: Employee = {
    employeeID: 0,
    employeeFirstName: '',
    employeeLastName: '',

    employeeEmail: '',
    employeePhoneNumber: 0,
    employeeGender: '',
    employeeAddress: '',
    employeeCity: '',
    employeeSalary: 0,

    departmentID: 0,
    department: {
      departmentID: 0,
      departmentName: ''
    }
  }

  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit(): void {
    this.GetAllEmployee();
  }

  // Get
  GetAllEmployee() {
    this.employeeService.GetAllEmployees()
      .subscribe(
        response => {
          this.employees = response;
        });
  }
}
