import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'add-new-employee', component: AddNewEmployeeComponent },
  { path: 'delete-employee', component: DeleteEmployeeComponent },
  { path: 'all-employees', component: AllEmployeesComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
