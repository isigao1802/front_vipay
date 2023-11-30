import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Transferencia, Credentials } from './transferencia';
import { Operacion } from './operacion';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  //Esta URL obtiene el listado de todos las transferencias en el backend
  private baseURL = "http://localhost:8080/tme/transferencia";
  private listar= "listar_transferencias";
  private guardar_transferencias= "transferencias";
  private obtenerOperacion="obtener_operacion";

  // Include your token here
  private token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpc2lkcm9nYW9uYUBkaWFjb25pYS5jb20ucHkiLCJleHAiOjE3MDM4NzI1NTcsIm5vbWJyZSI6IklzaWRybyBHYW9uYSJ9.7Ua08O0W9HVZJuZ6VhgHHAlFHJAkFT0yS-hQSOMReW4";

  constructor(private httpClient : HttpClient) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpc2lkcm9nYW9uYUBkaWFjb25pYS5jb20ucHkiLCJleHAiOjE3MDM2OTc2MTYsIm5vbWJyZSI6IklzaWRybyBHYW9uYSJ9.qUJtMPg-FhkopFQMyRtv7FbgL68vT0sbrkDQ2KBv-XA`
      //'Authorization': Bearer ${this.token}
    });
  }


  //este metodo nos sirve para obtener las transferencias
  obtenerListaDeTransferencias():Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(`${this.baseURL}/${this.listar}`, { headers: this.getHeaders()});
  }

  //este metodo nos sirve para registrar una transferencias
  registrarTransferencia(transferencia:Transferencia) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/${this.guardar_transferencias}`,transferencia, { headers: this.getHeaders()});
  }

  //este metodo sirve para actualizar la transferencia
  actualizarTransferencias(id:number,transferencia:Transferencia) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,transferencia);
  }

  //este metodo sirve para obtener o buscar una transferencia
  obtenerTransferenciaPorId(id:number):Observable<Transferencia>{
    return this.httpClient.get<Transferencia>(`${this.baseURL}/${id}`);
  }

  obtenerOperacionPorId(id:number):Observable<Operacion>{
    return this.httpClient.get<Operacion>(`${this.baseURL}/${this.obtenerOperacion}/${id}`, { headers: this.getHeaders()});
  }


  eliminarTransferencia(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
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

      //localStorage.setItem('token',token);

      return body;
    }))
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
