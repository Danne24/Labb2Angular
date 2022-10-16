import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/employee.model';
import { EmployeeService } from '../service/employees.service';


@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.css']
})
export class AddNewEmployeeComponent {

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

    departmentID: 0
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

  // Add Method
  onSubmit() {
    if (this.employee.employeeID == 0) {
      this.employeeService.CreateNewEmployee(this.employee).subscribe(
        response => {
          this.GetAllEmployee();
          this.employee = {
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
          }
        }
      );
    }
    else {
      this.UpdateEmployee(this.employee);
    }
  }

  // Update
  UpdateEmployee(employee: Employee) {
    this.employeeService.UpdateEmployee(employee).subscribe(
      response => {
        this.GetAllEmployee();
      }
    )
  }

  populateForm(employee: Employee) {
    this.employee = employee;
  }
}
