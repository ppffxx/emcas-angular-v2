import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ServServicioService } from 'src/app/servicios/serv-servicio.service';


@Component({
  selector: 'app-detalle-servicio',
  templateUrl: './detalle-servicio.component.html',
  styleUrls: ['./detalle-servicio.component.css']
})
export class DetalleServicioComponent {

  servicios:any;
  idServicio:number=0;
  

  constructor(private activatedRoute : ActivatedRoute, private service: ServServicioService) {
    
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


}
