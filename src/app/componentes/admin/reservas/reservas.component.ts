import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/modelos/reserva';
import { ReservaService } from 'src/app/servicios/reserva.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {


  reservasTodas: Reserva[] = [];



  constructor(private servicioReservas: ReservaService) {}
  ngOnInit(): void {

    this.servicioReservas.obtenerTodas().subscribe(data => {
      this.reservasTodas = data;
    })

  }


}
