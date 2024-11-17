import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from '../../pages/employees/employees.component';
import { EmployeeServiceService } from '../../services/employee.service';
import { DepartmentServiceService } from '../../services/department.service';
@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {
  @Input() isVisible: boolean = false;
  @Output() closeModalEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() closeModal: () => void = () => {};
  @Input() employeeUpdate: any;
  
  departmentService = inject(DepartmentServiceService);
  employeeService = inject(EmployeeServiceService);
  employeeComponent = inject(EmployeesComponent);

  codigo : number =this.employeeComponent.employee.codigo;
  nombre : string = this.employeeComponent.employee.nombre;
  apellido1 : string = this.employeeComponent.employee.apellido1;
  apellido2 : string = this.employeeComponent.employee.apellido2;
  codigoDepartament : number = this.employeeComponent.employee.codigoDepartamento;
  departments : any[] = [];
  idEmployee : string = "";

  ngOnChanges() {
    if (this.employeeUpdate) {
      this.idEmployee = this.employeeUpdate._id;
    }
  }

  getDepartments(){
    try{
      this.departmentService.getDepartment().subscribe((res:any)=>{
        if(res){
          this.departments = res;
        }else{
          console.error("Hubo un error al encontrar los departamentos");
        }
      })
    }catch(error){
      console.error("Hubo un error al realizar la peticion");
    }
  }

  updateEmployee(){
    if (this.idEmployee && this.codigo && this.nombre && this.apellido1 && this.apellido2 && this.codigoDepartament) {
      console.log("Datos a enviar: ", this.idEmployee, this.codigo, this.nombre, this.apellido1, this.apellido2, this.codigoDepartament);
      this.employeeService.updateEmployee(this.idEmployee, this.codigo, this.nombre, this.apellido1, this.apellido2, this.codigoDepartament).subscribe(
        (res: any) => {
          if (res) {
            alert("Elemento actualizado exitosamente");
            console.log(res);
            this.closeModal();
            this.employeeComponent.ngOnInit();
          } else {
            console.error("Hubo un error al actualizar al empleado");
            this.closeModal();
          }
        },
        error => {
          console.error("Error al actualizar el empleado:", error);
          alert("Hubo un error al actualizar el empleado.");
          this.closeModal();
        }
      );
    } else {
      console.error("Por favor complete todos los campos.");
      alert("Por favor complete todos los campos.");
    }
  }

  ngOnInit(){
    this.getDepartments();
  }
}
