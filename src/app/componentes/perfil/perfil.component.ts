import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuarioPerfil: Usuario | undefined;

  usuarioId= Number(localStorage.getItem('idUsuario'));

  constructor(private service: UsuarioService, private router: Router) {

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
