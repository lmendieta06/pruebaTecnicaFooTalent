import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DepartmentServiceService {

  constructor(private httpClient: HttpClient) { }

  codigo? : number;
  nombre : string = "";
  // routes
  API_URL_GET = "http://localhost:3000/departments";
  API_URL_POST = "http://localhost:3000/departments";
  API_URL_PUT = "http://localhost:3000/departments/:_id";
  API_URL_DELETE = "http://localhost:3000/departments/:_id";

  getDepartment(){
    return this.httpClient.get<any[]>(this.API_URL_GET);
  }

  postDepartment(codigo:number, nombre:string){
    const infoDepartment ={
      codigo : codigo,
      nombre : nombre      
    }

    return this.httpClient.post(this.API_URL_POST, infoDepartment);
  }

  updateDepartment(idDepartment: string, nombre: string, codigo: number){
    const infoDepartment = {
      nombre: nombre,
      codigo: codigo
    };

    return this.httpClient.put(this.API_URL_PUT.replace(':_id', idDepartment), infoDepartment);
  }

  deleteDepartment(idDelete:string){
    return this.httpClient.delete(this.API_URL_DELETE.replace(":_id", idDelete));
  }
}

