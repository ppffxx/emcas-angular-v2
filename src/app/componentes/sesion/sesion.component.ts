import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login.service';
import { ComprobarsesionService } from 'src/app/servicios/comprobarsesion.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent {

  loginUsuario:FormGroup = new FormGroup({});
  credenciales:string = '';
  credencialesBien: boolean = false;

  constructor(private router: Router, private fb: FormBuilder, private loginservicio: LoginService, private sesionServicio: ComprobarsesionService) {
    
  }

  ngOnInit() {
    this.loginUsuario = this.fb.group({
    usuario: ['',[Validators.required]],
    contrasenia: ['', [Validators.required]],
    })

    if(localStorage.getItem('idUsuario')) {
      this.router.navigate(['/']);
    }
    
  }

  loginUsuarios() {

    const usuarioLogin = {usuario: this.loginUsuario.value.usuario, contrasenia: this.loginUsuario.value.contrasenia, correo: '', repcontrasenia: ''};
    this.loginservicio.login(usuarioLogin).pipe(catchError(error => {
      if(error.status == 400) {
        this.credenciales = error.error;
        this.credencialesBien = true;
      }
      return of (null);
    })).subscribe(data => {
      if(data) {
        console.log(data);
        localStorage.setItem('idUsuario', data.idUsuario);
        this.router.navigate(['/']);
        this.sesionServicio.logueo.next(true);
      }
    })

  }
}
