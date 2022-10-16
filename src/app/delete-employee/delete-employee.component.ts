import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/employee.model';
import { EmployeeService } from '../service/employees.service';


@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent {

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




  // Delete
  onDelete(id: number) {
    this.employeeService.DeleteEmployee(id)
      .subscribe(
        response => {
          this.GetAllEmployee();
        }
      )
  }
}
