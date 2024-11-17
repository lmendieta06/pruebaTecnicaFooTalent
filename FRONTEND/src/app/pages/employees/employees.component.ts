import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { AddEmployeeComponent } from '../../components/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from '../../components/update-employee/update-employee.component';
import { EmployeeServiceService } from '../../services/employee.service';
@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [NavigationComponent, CommonModule, AddEmployeeComponent, UpdateEmployeeComponent],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  isMenuOpen = false;
  employees : any [] = [];
  addEmployee : boolean = false;
  updateEmployee : boolean = false;
  employee : any = [];

  employeeService = inject(EmployeeServiceService);

  onMenuToggle(isMenuOpen: boolean) {
    this.isMenuOpen = isMenuOpen;
  }

  getEmployess(){
    try{
      this.employeeService.getEmployee().subscribe((res:any)=>{
        if(res){
          this.employees = res;
          console.log(res);
        }else{
          console.error("Hubo un error al encontrar empleados")
        }
      })
    }catch(error){
      console.error("Hubo un error al hacer la peticion");
    }
  }

  addEmployeeModal(){
    this.addEmployee = true;
  }

  updateEmployeeModal(employee:any){
    this.updateEmployee = true;
    this.employee = employee;
  }

  deleteEmployee(idDelete:string){
    try{
      if(idDelete!==null){
        this.employeeService.deleteEmployee(idDelete).subscribe((res:any)=>{
          alert("El departamento se elimino correctamente");
          this.ngOnInit();
        })
      }else{
        console.error("Hubo un error al eliminar el empleado");
      }
    }catch(error){
      console.error("Hubo un error con la peticion")
    }
  }

  ngOnInit(){
    this.getEmployess();
  }

  closeModal(){
    this.addEmployee = false;
    this.updateEmployee = false;
  }
}
