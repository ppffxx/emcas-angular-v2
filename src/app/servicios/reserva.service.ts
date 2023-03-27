import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {


  url:string = 'http://localhost:8080/reservas';

  constructor(private http: HttpClient) { }


  reservar(reserva: any): Observable<any> {
    return this.http.post(this.url, reserva);
  }

  obtenerTodas(): Observable<any> {
    return this.http.get('http://localhost:8080/reservas/todas');
  }

}
