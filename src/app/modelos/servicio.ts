export class Servicio {


    public idServicio:number|null;
    public nombre:string;
    public descripcion:string|null;
    public imagen1:string|null;
    public imagen2:string|null;
    public imagen3:string|null;
    public imagen4:string|null;
    public precio:number|null;


    constructor(idServicio:number|null, nombre:string, descripcion:string|null, imagen1:string|null, imagen2:string|null, imagen3:string|null, imagen4:string|null, precio:number|null) {
        this.idServicio = idServicio;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen1 = imagen1;
        this.imagen2 = imagen2;
        this.imagen3 = imagen3;
        this.imagen4 = imagen4;
        this.precio = precio;
    }
}
