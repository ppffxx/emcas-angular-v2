import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Servicio } from 'src/app/modelos/servicio';
import { Usuario } from 'src/app/modelos/usuario';
import { ReservaService } from 'src/app/servicios/reserva.service';
import { ServServicioService } from 'src/app/servicios/serv-servicio.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  servicios: Servicio|undefined;
  usuarioInfo: Usuario|undefined;
  
  idServicio:number=0;
  idUsuario:number = Number(localStorage.getItem('idUsuario'));

  registroReserva:FormGroup = new FormGroup({});

  constructor(private router: Router, private activatedRoute : ActivatedRoute, private service: ServServicioService, private serviceUs: UsuarioService, private fb: FormBuilder, private reservaServicio: ReservaService) {
    activatedRoute.params.subscribe( prm => {
      this.idServicio = prm['id'];
      localStorage.setItem('idServicio', ''+this.idServicio+'');
  })
  }

  ngOnInit() {
    this.registroReserva = this.fb.group( {
      nombre: [''],
      apellido:[''],
      telefono:[''],
      fechaReserva:['']
    })

    if(!localStorage.getItem('idUsuario')) {
      this.router.navigate(['/sesion']);
    }


    this.serviceUs.getUsuarioDetalle(this.idUsuario).subscribe(data => {
      this.usuarioInfo = data;
      this.registroReserva.get('nombre')?.setValue(this.usuarioInfo?.persona?.nombre);
      this.registroReserva.get('apellido')?.setValue(this.usuarioInfo?.persona?.apellido);
      this.registroReserva.get('telefono')?.setValue(this.usuarioInfo?.persona?.telefono);
    })

    this.service.getServicioDetalle(this.idServicio).subscribe(data => {
      this.servicios = data;
  })
  }


  reservar() {
    const reservaJson = {usuario: {idUsuario: this.idUsuario}, servicio: {idServicio: this.idServicio}, fechaReserva: this.registroReserva.value.fechaReserva};
    this.reservaServicio.reservar(reservaJson).pipe(catchError(error => {
      if(error.status == 400) {
        Swal.fire({
          icon: 'error',
          title: error.error + '. Revisa si falta algún campo',
          showConfirmButton: false,
          timer: 2000
        })
      }
      return of (null);
    })).subscribe(data => {
      if(data) {
        Swal.fire({
          icon: 'success',
          title: 'Reserva creada',
          text: 'La reserva fue creada exitosamente. Pronto nos comunicamos con vos',
          showConfirmButton: false,
          timer: 3000
        })
        this.router.navigate(['/']);
      }
    })

  }
  

}


