import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/servicios/registro.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  
  minimo:number = 5;
  validacionPass:boolean = false;
  registroUsuario:FormGroup = new FormGroup({});

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
     const usuarioRegistro= {usuario: this.registroUsuario.value.usuario, correo: this.registroUsuario.value.correo, contrasenia: this.registroUsuario.value.contrasenia};
     this.registroService.registro(usuarioRegistro).subscribe(data => {
       this.validacionPass=false;
       this.router.navigate(['/sesion']);
     })
    } else {
      this.validacionPass=true;
    }

  }

}
