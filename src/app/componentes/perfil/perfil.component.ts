import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';
import { ServServicioService } from 'src/app/servicios/serv-servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuarioPerfil: Usuario | undefined;

  usuarioId= Number(localStorage.getItem('idUsuario'));

  constructor(private service: ServServicioService, private router: Router) {

  }  

  ngOnInit() {
    if(!localStorage.getItem('idUsuario')) {
      
      this.router.navigate(['/sesion']);

    }

    this.service.getUsuarioDetalle(this.usuarioId).subscribe(data => {
      this.usuarioPerfil = data;
    });

    
  }


}
