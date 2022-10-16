import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewEmployeeComponent,
    DeleteEmployeeComponent,
    AllEmployeesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



