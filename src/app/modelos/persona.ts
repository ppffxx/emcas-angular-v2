export class Persona {
    
    public idPersona:number|null;
    public nombre:string|null;
    public apellido:string|null;
    public telefono:string|null;


    constructor(idPersona:number|null, nombre:string|null, apellido:string|null, telefono:string|null) {
        this.idPersona = idPersona;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
    }

}
