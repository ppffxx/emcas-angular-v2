import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/servicios/registro.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  
  minimo:number = 5;
  validacionPass:boolean = false;
  validacionDos:boolean = false;
  registroUsuario:FormGroup = new FormGroup({});
  error:String = '';

  constructor(private router: Router, private registroService:RegistroService, private fb: FormBuilder) {
    
  }

  ngOnInit() {
    this.registroUsuario = this.fb.group({
    usuario: ['',[Validators.required, Validators.minLength(this.minimo), Validators.pattern('^[a-zA-Z0-9]+$')]],
    correo: ['',[Validators.required, Validators.email]],
    contrasenia: ['',[Validators.required]],
    repcontrasenia: ['',[Validators.required]]
    })

    if(localStorage.getItem('idUsuario')) {
      this.router.navigate(['/']);
    }
    
  }

  registro() {
    if(this.registroUsuario.value.contrasenia === this.registroUsuario?.value.repcontrasenia) {
      this.validacionPass = false;
     const usuarioRegistro= {usuario: this.registroUsuario.value.usuario, correo: this.registroUsuario.value.correo, contrasenia: this.registroUsuario.value.contrasenia};
     this.registroService.registro(usuarioRegistro).pipe(catchError(error => {
      if(error.status == 400) {
        this.error = error.error;
        this.validacionDos = true;
      }
      return of (null);
    })).subscribe(data => {
      if(data) {
        Swal.fire({
          title: 'Cuenta creada exitosamente',
          confirmButtonText: 'Cerrar',
        })
         this.router.navigate(['/sesion']);
      }
    })
    } else {
      console.log('aaaa')
      this.validacionPass=true;
    }

  }

}




