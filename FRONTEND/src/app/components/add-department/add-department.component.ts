import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentServiceService } from '../../services/department.service';
import { CommonModule } from '@angular/common';
import { DepartmentsComponent } from '../../pages/departments/departments.component';
@Component({
  selector: 'app-add-department',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.css'
})
export class AddDepartmentComponent {
  @Input() isVisible : boolean = false;
  @Output() closeModalEvent : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() closeModal(){};
  
  departmentService = inject(DepartmentServiceService);
  departmentComponent = inject(DepartmentsComponent);

  codigo? : number;
  nombre:string = "";

  postDepartment(){
    if (this.codigo && this.nombre) {
      this.departmentService.postDepartment(this.codigo, this.nombre).subscribe(
        (response:any) => {
          console.log('Departamento creado con éxito:', response);
          alert("Departamento creado exitosamente")
          this.closeModal();
          this.departmentComponent.ngOnInit();
        },
        error => {
          console.error('Error al crear el departamento:', error);
        }
      );
    } else {
      console.warn('Por favor complete todos los campos.');
    }
  }
}
