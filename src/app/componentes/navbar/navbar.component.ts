import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  sesion:boolean = false;
  barraNegra:boolean = false;
  barraTrans:boolean = true;
  

  constructor() {
  }

  ngOnInit() {
    if(localStorage.getItem('idUsuario')) {
      this.sesion= true;
    } else {
        this.sesion = false;
    }

  }

  @HostListener("window:scroll", ['$event'])
  onScroll($event:Event){
    let previousScroll:number = 0;
    let scroll = document.documentElement.scrollTop;
    if (scroll > previousScroll && scroll > 350){
      this.barraNegra=true;
      this.barraTrans=false;
  }
  if (scroll < 350) {
    this.barraNegra = false;
    this.barraTrans = true;
  }
  previousScroll = scroll;
  }

}
