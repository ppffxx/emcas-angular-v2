import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServServicioService {

  constructor(private http: HttpClient) {}

  getServicios(): Observable<any> {
    return this.http.get('http://localhost:8080/servicios/todos');
  }

}
