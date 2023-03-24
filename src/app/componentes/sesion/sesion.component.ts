import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent {

  constructor(private router: Router) {

  }

  ngOnInit() {
    if(localStorage.getItem('idUsuario')) {
      this.router.navigate(['/']);
    }
  }

}
