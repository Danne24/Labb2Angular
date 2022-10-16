import { Component } from '@angular/core';
import { Employee } from './Models/employee.model';
import { EmployeeService } from './service/employees.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
