import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noencontrado',
  templateUrl: './noencontrado.component.html',
  styleUrls: ['./noencontrado.component.css']
})
export class NoencontradoComponent {


  constructor(private router: Router) {}


  volverInicio() {
 this.router.navigate(['/'])
}

}
