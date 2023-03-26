import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Servicio } from 'src/app/modelos/servicio';
import { Usuario } from 'src/app/modelos/usuario';
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

  constructor(private router: Router, private activatedRoute : ActivatedRoute, private service: ServServicioService, private serviceUs: UsuarioService) {

    activatedRoute.params.subscribe( prm => {
      this.idServicio = prm['id'];
      localStorage.setItem('idServicio', ''+this.idServicio+'');
  })


  }


  ngOnInit() {
    if(!localStorage.getItem('idUsuario')) {
      this.router.navigate(['/sesion']);
    }

    this.serviceUs.getUsuarioDetalle(this.idUsuario).subscribe(data => {
      this.usuarioInfo = data;
    })

    this.service.getServicioDetalle(this.idServicio).subscribe(data => {
      this.servicios = data;
      console.log(this.servicios);
  })
  }

}
