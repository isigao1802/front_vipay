import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Operacion } from './operacion';
import {  Credentials } from './transferencia';


@Injectable({
  providedIn: 'root'
})
export class OperacionService {

  //Estas son las URLs de todas las operaciones en el backend
  private baseURL = "http://localhost:8080/tme";
  private listar= "listar_operaciones";
  private obtenerById= "obtener_operacion";

  constructor(private httpClient : HttpClient) { }

  // Include your token here
 private token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpc2lkcm9nYW9uYUBkaWFjb25pYS5jb20ucHkiLCJleHAiOjE3MDM4NzI1NTcsIm5vbWJyZSI6IklzaWRybyBHYW9uYSJ9.7Ua08O0W9HVZJuZ6VhgHHAlFHJAkFT0yS-hQSOMReW4";

 private getHeaders(): HttpHeaders {
  return new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpc2lkcm9nYW9uYUBkaWFjb25pYS5jb20ucHkiLCJleHAiOjE3MDM2OTc2MTYsIm5vbWJyZSI6IklzaWRybyBHYW9uYSJ9.qUJtMPg-FhkopFQMyRtv7FbgL68vT0sbrkDQ2KBv-XA`
    //'Authorization': Bearer ${this.token}
  });
}

  //este metodo nos sirve para obtener las operaciones
  obtenerListaDeOperaciones():Observable<Operacion[]>{
    return this.httpClient.get<Operacion[]>(`${this.baseURL}/${this.listar}` , { headers: this.getHeaders()});
  }

  //este metodo nos sirve para registrar una operacion
  registrarOperacion(operacion:Operacion) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,operacion);
  }

  //este metodo sirve para actualizar el operacion
  actualizarOperacion(id:number,operacion:Operacion) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,operacion);
  }

  //este metodo sirve para obtener o buscar un operacion
  obtenerOperacionPorId(id:number):Observable<Operacion>{
    return this.httpClient.get<Operacion>(`${this.baseURL}/${this.obtenerById}/${id}`, { headers: this.getHeaders()});
  }

  eliminarOperacion(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`, { headers: this.getHeaders()});
  }

  login(creds: Credentials){
    return this.httpClient.post('http://localhost:8080/login',creds, {
      observe:'response'
    }).pipe(map((response: HttpResponse<any>) => {
      const body = response.body;
      const headers = response.headers;

      const bearerToken = headers.get('Authorization')!;
      //const token = bearerToken.replace('Bearer ', '');

      if (bearerToken) {
        const token = bearerToken.replace('Bearer ', '');
        localStorage.setItem('token', token);
      } else {
        // Manejar el caso en el que 'Authorization' no está presente en los encabezados.
        console.error('No se encontró el token en los encabezados de Authorization.');
      }
      return body;
    }))
  }

  getToken(){
    return localStorage.getItem('token');
  }


}
