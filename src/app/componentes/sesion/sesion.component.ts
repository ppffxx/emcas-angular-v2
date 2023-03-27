import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login.service';
import { ComprobarsesionService } from 'src/app/servicios/comprobarsesion.service';
import { catchError, of } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {

  loginUsuario:FormGroup = new FormGroup({});

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
        Swal.fire({
          icon: 'error',
          title: error.error,
          text: 'verifica los campos ingresados',
          showConfirmButton:false,
          timer: 3000,
         })
      }
      return of (null);
    })).subscribe(data => {
      if(data) {
        Swal.fire({
          position: 'bottom-end',
          text: 'inicio de sesion exitoso',
          showConfirmButton:false,
          timer: 1000,
          timerProgressBar: true,
        })
        localStorage.setItem('idUsuario', data.idUsuario);
        this.router.navigate(['/']);
        this.sesionServicio.logueo.next(true);
      }
    })

  }
}
