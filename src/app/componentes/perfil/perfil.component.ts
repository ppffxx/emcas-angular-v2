import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ComprobarsesionService } from 'src/app/servicios/comprobarsesion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  eliminar:boolean = false;
  datosActualizados:boolean = false;
  usuarioPerfil: Usuario | undefined;
  personaPerfil:FormGroup = new FormGroup({});
  usuarioId= Number(localStorage.getItem('idUsuario'));

  constructor(private service: UsuarioService, private router: Router, private personaServicio: PersonaService, private fb: FormBuilder, private sesion: ComprobarsesionService) {

  }  

  ngOnInit() {
    if(!localStorage.getItem('idUsuario')) {
      this.router.navigate(['/sesion']);
    }

    this.personaPerfil = this.fb.group( {
      nombre: [''],
      apellido: [''],
      telefono: ['']
    })
    
    this.service.getUsuarioDetalle(this.usuarioId).subscribe(data => {
      this.usuarioPerfil = data;
      this.personaPerfil.get('nombre')?.setValue(this.usuarioPerfil?.persona?.nombre);
      this.personaPerfil.get('apellido')?.setValue(this.usuarioPerfil?.persona?.apellido);
      this.personaPerfil.get('telefono')?.setValue(this.usuarioPerfil?.persona?.telefono);
    });
  }
  
  actualizarPersona() {
    const perfilaActualizar = {nombre: this.personaPerfil.value.nombre, apellido: this.personaPerfil.value.apellido, telefono: this.personaPerfil.value.telefono}
    this.personaServicio.actualizarPersona(this.usuarioId, perfilaActualizar).subscribe(data => {
      Swal.fire({
        icon: 'success',
        title: 'Datos actualizados',
        text: 'Los datos fueron actualizados de forma exitosa',
        showConfirmButton: false,
          timer: 2000
      }).then((result) => {
        if (result) {
          this.ngOnInit();
        }
      })
    })
  }

  eliminarCuenta() {
    this.eliminar = true;
  }

  cancelarEliminar() {
    this.eliminar = false;
  }

  eliminarConfirmado() {
    this.service.deleteUsuario(this.usuarioId).subscribe(data => {
      this.sesion.logueo.next(false);
      localStorage.removeItem('idUsuario');
      Swal.fire({
        title: 'Cuenta eliminada',
        text: 'Esperamos volver a verte pronto',
        showConfirmButton: false,
        timer: 3000
      })
      this.router.navigate(['/sesion']);
    })
  }

}
