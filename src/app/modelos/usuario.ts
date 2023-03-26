import { Persona } from "./persona";
import { Reserva } from "./reserva";

export class Usuario {
        public idUsuario:number|null;
        public usuario:string|null;
        public correo:string|null;
        public contrasenia:string|null;
        public persona:Persona|null;
        public reservas:Reserva[]|null;
        
    constructor(idUsuario:number|null, usuario:string|null, correo:string|null, contrasenia:string|null, persona:Persona|null, reservas:Reserva[]|null) {
            this.idUsuario = idUsuario;
            this.usuario = usuario;
            this.contrasenia = contrasenia;
            this.correo = correo;
            this.persona = persona;
            this.reservas = reservas;
        }


}
