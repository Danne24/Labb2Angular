import { Department } from "./department.model";

export interface Employee {
    employeeID: number;
    employeeFirstName: string;
    employeeLastName: string;

    employeeEmail: string;
    employeePhoneNumber: number;
    employeeGender: string;
    employeeAddress: string;
    employeeCity: string;
    employeeSalary: number;

    departmentID: number;
    department?: Department;
}