import { Component } from '@angular/core';

interface ContactoForm
{
nombre: string;
apellido: string;
correo: string;
telefono: string;
mensaje: string;
}

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


  onSubmit(values:any):void {
    console.log(values);
  }

}
