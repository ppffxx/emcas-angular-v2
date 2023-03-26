import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaperfil } from '../modelos/personaperfil';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url:string = 'http://localhost:8080/personas/';

  constructor(private http: HttpClient) { }


  actualizarPersona(idUsuario:number, persona: Personaperfil): Observable<any> {
    return this.http.put(this.url+idUsuario, persona);
  }

}
