import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarioregistro } from '../modelos/usuarioregistro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  url:string = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) { }



  registro(usuario: Usuarioregistro): Observable<any> {
    return this.http.post(this.url, usuario);
  }
  
}
