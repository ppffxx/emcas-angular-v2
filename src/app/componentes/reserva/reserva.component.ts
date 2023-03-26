import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Servicio } from 'src/app/modelos/servicio';
import { Usuario } from 'src/app/modelos/usuario';
import { ReservaService } from 'src/app/servicios/reserva.service';
import { ServServicioService } from 'src/app/servicios/serv-servicio.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {

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

    this.reservaServicio.reservar(reservaJson).subscribe(data => {
      this.router.navigate(['/']);
    })

  }
  

}
