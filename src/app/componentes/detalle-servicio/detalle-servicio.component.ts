import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Servicio } from 'src/app/modelos/servicio';
import { ServServicioService } from 'src/app/servicios/serv-servicio.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-detalle-servicio',
  templateUrl: './detalle-servicio.component.html',
  styleUrls: ['./detalle-servicio.component.css']
})
export class DetalleServicioComponent {

  servicios: Servicio| undefined;
  idServicio:number=0;
  

  constructor(private activatedRoute : ActivatedRoute, private service: ServServicioService, private router: Router) {
    
    activatedRoute.params.subscribe( prm => {
      this.idServicio = prm['id'];
      localStorage.setItem('idServicio', ''+this.idServicio+'');
  })

  }

  
  ngOnInit() {
    this.service.getServicioDetalle(this.idServicio).subscribe(data => {
        this.servicios = data;
        console.log(this.servicios);
    });

}

reservar() {
  if(localStorage.getItem('idUsuario')) {
    this.router.navigate(['/reserva/'+this.idServicio]);
    
  } else {
    Swal.fire({
      icon: 'warning',
      title: 'Inicia Sesión',
      text: 'Necesitas iniciar sesión para hacer una reserva',
      showConfirmButton: false,
      timer: 3000
    })
    this.router.navigate(['/sesion']);
  }
}


}
