export interface Persona {
  //? significa opcional
  id?: number;
  nombre: string;
  apellido: string;
  correo: string;
  tipoDocumento: string;
  documento: number;
  fechaNacimiento: Date;
}
