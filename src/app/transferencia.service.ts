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
  private guardar_transferencias= "enviar_transferencias";
  private obtenerOperacion="obtener_operacion";
  private obtenerTransferencia="obtener_transferencia";

 

  constructor(private httpClient : HttpClient) { }


  obtenerListaDeTransferencias(): Observable<Transferencia[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('admin:admin')
    });
    return this.httpClient.get<Transferencia[]>(`${this.baseURL}/${this.listar}`, { headers: headers });
  }
  //este metodo nos sirve para registrar una transferencias
  registrarTransferencia(transferencia:Transferencia) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/${this.guardar_transferencias}`,transferencia);
  }

  //este metodo sirve para actualizar la transferencia
  actualizarTransferencias(id:number,transferencia:Transferencia) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,transferencia);
  }

  //este metodo sirve para obtener o buscar una transferencia
  obtenerTransferenciaPorId(id:number):Observable<Transferencia>{
    return this.httpClient.get<Transferencia>(`${this.baseURL}/${this.obtenerTransferencia}/${id}`);
  }

  obtenerOperacionPorId(id:number):Observable<Operacion>{
    return this.httpClient.get<Operacion>(`${this.baseURL}/${this.obtenerOperacion}/${id}`);
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
