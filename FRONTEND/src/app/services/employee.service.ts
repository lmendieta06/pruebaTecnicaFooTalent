import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private httpClient : HttpClient) { }

  codigo? : number;
  nombre : string = "";
  apellido1 : string = "";
  apellido2 : string = "";
  codigoDepartament? : number;

  API_URL_GET = "http://localhost:3000/employees";
  API_URL_POST = "http://localhost:3000/employees";
  API_URL_PUT = "http://localhost:3000/employees/:_id";
  API_URL_DELETE = "http://localhost:3000/employees/:_id";

  getEmployee(){
    return this.httpClient.get<any[]>(this.API_URL_GET);
  }

  postEmployee(codigo:number, nombre :string, apellido1:string, apellido2:string, codigoDepartament:number){
    const infoEmployee = {
      codigo : codigo, 
      nombre : nombre,
      apellido1 : apellido1,
      apellido2 : apellido2,
      codigoDepartamento : codigoDepartament
    }

    return this.httpClient.post(this.API_URL_POST, infoEmployee);
  }

  updateEmployee(idEmployee:string, codigo:number, nombre :string, apellido1:string, apellido2:string, codigoDepartament:number ){
    const infoEmployee = {
      codigo : codigo, 
      nombre : nombre,
      apellido1 : apellido1,
      apellido2 : apellido2,
      codigoDepartamento : codigoDepartament
    }

    return this.httpClient.put(this.API_URL_PUT.replace(":_id", idEmployee), infoEmployee);
  }

  deleteEmployee(idEmployee:string){
    return this.httpClient.delete(this.API_URL_DELETE.replace(":_id", idEmployee));
  }
}
