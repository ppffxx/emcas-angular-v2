import { Component } from '@angular/core';
import { ServServicioService } from 'src/app/servicios/serv-servicio.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  usuario:any;

  usuarioId= Number(localStorage.getItem('idUsuario'));

  constructor(private service: ServServicioService) {
   
  }

  

  ngOnInit() {
    this.service.getUsuarioDetalle(this.usuarioId).subscribe(data => {
      this.usuario = data;
      console.log(this.usuario);
    });

    
  }


}
