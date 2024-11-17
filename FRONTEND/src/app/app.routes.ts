import { Routes } from '@angular/router';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { EmployeesComponent } from './pages/employees/employees.component';

export const routes: Routes = [
    {path:"", component:EmployeesComponent, title:"Empleados"},
    {path:"departments", component:DepartmentsComponent, title:"Departamentos"}
];
