import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DepartmentsComponent } from '../../pages/departments/departments.component';
import { DepartmentServiceService } from '../../services/department.service';
@Component({
  selector: 'app-update-department',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-department.component.html',
  styleUrl: './update-department.component.css'
})
export class UpdateDepartmentComponent {
  @Input() isVisible: boolean = false;
  @Output() closeModalEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() closeModal: () => void = () => {};
  @Input() departmentUpdate: any;

  departmentService = inject(DepartmentServiceService);
  departmentComponents = inject(DepartmentsComponent);

  idDepartment: string = "";
  codigo: number = this.departmentComponents.department.codigo;
  nombre: string = this.departmentComponents.department.nombre;

  ngOnChanges() {
    if (this.departmentUpdate) {
      this.idDepartment = this.departmentUpdate._id;
      // this.codigo = this.departmentUpdate.codigo;
      // this.nombre = this.departmentUpdate.nombre;
    }
  }

  updateDepartment() {
    if (this.idDepartment && this.nombre && this.codigo) {
      console.log('Datos a enviar:', this.idDepartment, this.nombre, this.codigo);
      this.departmentService.updateDepartment(this.idDepartment, this.nombre, this.codigo).subscribe(
        (res: any) => {
          if (res) {
            alert("Elemento actualizado exitosamente");
            console.log(res);
            this.closeModal();
            this.departmentComponents.ngOnInit();
          } else {
            console.error("Hubo un error al actualizar el departamento");
            this.closeModal();
          }
        },
        error => {
          console.error("Error en la solicitud:", error);
          alert("Hubo un error al actualizar el departamento.");
          this.closeModal();
        }
      );
    } else {
      console.warn('Por favor complete todos los campos.');
      alert('Por favor complete todos los campos.');
    }
  }
}
