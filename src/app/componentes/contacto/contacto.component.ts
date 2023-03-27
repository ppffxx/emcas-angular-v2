import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

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


  public sendEmail(e: Event) {
    emailjs.sendForm('service_1jrfn1h', 'template_wy29ub7', e.target as HTMLFormElement, 'MdSlzJzVzyMyzS4XT')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

}
