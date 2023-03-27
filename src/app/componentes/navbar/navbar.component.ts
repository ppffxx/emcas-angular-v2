import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ComprobarsesionService } from 'src/app/servicios/comprobarsesion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  sesion:boolean = false;
  barraNegra:boolean = false;
  barraTrans:boolean = true;
  

  constructor(private sesionServicio: ComprobarsesionService, private router: Router) {
  }

  ngOnInit() {
    if(localStorage.getItem('idUsuario')) {
      this.sesionServicio.logueo.next(true);
    } else {
      this.sesionServicio.logueo.next(false);
    }

    this.sesionServicio.logueo.subscribe(data => {
      this.sesion = data;
    })

  }

  cerrarSesion() {
    localStorage.removeItem('idUsuario')
    this.sesionServicio.logueo.next(false);
    this.router.navigate(['/sesion']);
  }


  @HostListener("window:scroll", ['$event'])
  onScroll($event:Event){
    let previousScroll:number = 0;
    let scroll = document.documentElement.scrollTop;
    if (scroll > previousScroll && scroll > 100){
      this.barraNegra=true;
      this.barraTrans=false;
  }
  if (scroll < 100) {
    this.barraNegra = false;
    this.barraTrans = true;
  }
  previousScroll = scroll;
  }

}
