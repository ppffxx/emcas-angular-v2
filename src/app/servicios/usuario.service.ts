import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  url:string = 'http://localhost:8080/usuarios/';

  constructor(private http: HttpClient) { }


  getUsuarioDetalle(idUsuario:number): Observable<any> {
    return this.http.get(this.url+idUsuario);
  }

  deleteUsuario(idUsuario:number) {
    return this.http.delete(this.url + `/${idUsuario}`);
  }

}
