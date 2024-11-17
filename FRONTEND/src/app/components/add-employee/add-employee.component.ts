import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from '../../pages/employees/employees.component';
import { EmployeeServiceService } from '../../services/employee.service';
import { DepartmentServiceService } from '../../services/department.service';
@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  @Input() isVisible : boolean = false;
  @Output() closeModalEvent : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() closeModal(){};

  codigo? : number;
  nombre : string = "";
  apellido1 : string = "";
  apellido2 : string = "";
  codigoDepartament? : number;
  departments : any[] = [];

  employeeService = inject(EmployeeServiceService);
  employeeComponent = inject(EmployeesComponent);
  departmentService = inject(DepartmentServiceService);

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

  postEmployee(){
    if (this.codigo && this.nombre && this.apellido1 && this.apellido2 && this.codigoDepartament) {

      this.employeeService.postEmployee(this.codigo, this.nombre, this.apellido1, this.apellido2, this.codigoDepartament).subscribe(
        (response: any) => {
          alert('Empleado creado exitosamente.');
          console.log(response);
          this.closeModal();
          this.employeeComponent.ngOnInit(); // Actualiza la lista de empleados en el componente principal
        },
        error => {
          console.error('Error al crear el empleado:', error);
          alert('Ocurrió un error al crear el empleado.');
        }
      );
    } else {
      alert('Por favor complete todos los campos.');
    }
  }

  ngOnInit(){
    this.getDepartments();
  }
}
