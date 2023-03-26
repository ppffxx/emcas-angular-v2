import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServServicioService {

  url:string = 'http://localhost:8080/servicios/';

  

  constructor(private http: HttpClient) {}

  getServicios(): Observable<any> {
    return this.http.get(this.url + 'todos');
  }

  getServicioDetalle(idServicio:number): Observable<any> {
    return this.http.get(this.url + idServicio);
  }

  getUsuarioDetalle(idUsuario:number): Observable<any> {
    return this.http.get('http://localhost:8080/usuarios/' + idUsuario + '');
  }

}
