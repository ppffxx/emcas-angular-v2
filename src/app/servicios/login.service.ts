import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarioregistro } from '../modelos/usuarioregistro';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string = 'http://localhost:8080/usuarios/login';

  constructor(private http: HttpClient) { }



  login(usuario: Usuarioregistro): Observable<any> {
    return this.http.post(this.url, usuario);
  }

}
