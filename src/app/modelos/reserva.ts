import { Servicio } from "./servicio";
import { Usuario } from "./usuario";

export class Reserva {

    public idReserva:number|null;
    public fechaReserva:Date|null;
    public servicio:Servicio|null;
    public usuario:Usuario|null;


    constructor(idReserva:number|null, fechaReserva:Date|null, servicio:Servicio|null, usuario:Usuario|null) {
        this.idReserva = idReserva;
        this.fechaReserva = fechaReserva;
        this.servicio = servicio;
        this.usuario = usuario;
    }
}
