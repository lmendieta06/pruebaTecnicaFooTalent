import { Component, inject, NgModule } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DepartmentServiceService } from '../../services/department.service';
import { AddDepartmentComponent } from '../../components/add-department/add-department.component';
import { UpdateDepartmentComponent } from '../../components/update-department/update-department.component';
@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [NavigationComponent, CommonModule, AddDepartmentComponent, UpdateDepartmentComponent],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css',
  providers: [DepartmentServiceService, HttpClient]
})
export class DepartmentsComponent {
  departmentService = inject(DepartmentServiceService);
  isMenuOpen = false;
  addDepartment : boolean = false;
  updateDepartment : boolean = false;
  departments : any[] = [];
  department : any = [];

  onMenuToggle(isMenuOpen: boolean) {
    this.isMenuOpen = isMenuOpen;
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

  addDepartmentModal(){
    this.addDepartment = true;
  }

  updateDepartmentModal(department:any){
    this.updateDepartment = true;
    this.department = department;
  }

  deleteDepartment(idDelete:string){
    try{
      if(idDelete !== null){
        this.departmentService.deleteDepartment(idDelete).subscribe((res:any)=>{
          if(res){
            alert("El departamento se elimino correctamento")
            this.ngOnInit();
          }else{
            console.error("Hubo un problema con eliminar el departamento");
          }
        })
      }
    }catch(error){
      console.error("Hubo un error con la peticion")
    }
  }

  ngOnInit(){
    this.getDepartments();
  }

  closeModal(){
    this.addDepartment = false;
    this.updateDepartment = false;
  }
}
