import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'
import { ServServicioService } from 'src/app/servicios/serv-servicio.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {

  servicios:any;
  idServicio:number=0;

  constructor(private router: Router, private activatedRoute : ActivatedRoute, private service: ServServicioService) {

    activatedRoute.params.subscribe( prm => {
      this.idServicio = prm['id'];
      localStorage.setItem('idServicio', ''+this.idServicio+'');
  })


  }

  

  ngOnInit() {
    if(!localStorage.getItem('idUsuario')) {
      this.router.navigate(['/sesion']);
    }

    this.service.getServicioDetalle(this.idServicio).subscribe(data => {
      this.servicios = data;
      console.log(this.servicios);

  })
  }

}
