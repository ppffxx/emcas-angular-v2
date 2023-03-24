import { Component, OnInit } from '@angular/core';
import { ServServicioService } from 'src/app/servicios/serv-servicio.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {

    servicios: any;

    constructor(private service: ServServicioService ) { }

    ngOnInit() {

        this.service.getServicios().subscribe(data => {
            this.servicios = data;
            console.log(data);
        });

    }


}
