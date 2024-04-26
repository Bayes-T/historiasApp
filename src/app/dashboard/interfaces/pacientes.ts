export interface Paciente {
    id: string;
    Indice: string;
    Nombre: string;
    DNI: string;
    Edad: number;
    OSocial: string;
    Acciones: Acciones;
}


export interface Acciones {
  Leer: {
    Texto: string,
    Url: string,
  },
  Editar: {
    Texto: string,
    Url: string,
  },
  Borrar: {
    Texto: string,
    Url: string,
  },
}
