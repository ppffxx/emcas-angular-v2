import { Component } from '@angular/core';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  formodel = {
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    mensaje: ""
  }

  constructor(private router: Router) {}


  public sendEmail(e: Event) {
    emailjs.sendForm('service_1jrfn1h', 'template_wy29ub7', e.target as HTMLFormElement, 'MdSlzJzVzyMyzS4XT')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        Swal.fire(({
          icon: 'success',
          title: 'Enviado',
          text: 'Formulario enviado! Gracias por contactarte!',
          showConfirmButton: false,
          timer: 2000
        }))
        this.formodel.nombre = '';
        this.formodel.apellido = '';
        this.formodel.correo = '';
        this.formodel.telefono = '';
        this.formodel.mensaje = '';
        this.router.navigate(['/']);
      }, (error) => {
        console.log(error.text);
      });
  }

}
