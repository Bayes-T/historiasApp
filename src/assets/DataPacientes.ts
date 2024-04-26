import {Paciente} from "../app/dashboard/interfaces/pacientes";

export const dataPacientes: Paciente[] = [
    {id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d", Indice: "1", Nombre: "Juan Pérez", DNI: "38294812", Edad: 18, OSocial: "OSEP", Acciones: {Leer: {Texto: "", Url: ""}, Editar: {Texto: "", Url: ""}, Borrar: {Texto: "", Url: ""} }},
    {id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d", Indice: "2", Nombre: "Carolina Gómez", DNI: "31244812", Edad: 33, OSocial: "Particular", Acciones: {Leer: {Texto: "", Url: ""}, Editar: {Texto: "", Url: ""}, Borrar: {Texto: "", Url: ""} }},
  {id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d", Indice: "3", Nombre: "Simón Bize", DNI: "319292191", Edad: 10, OSocial: "OSEP", Acciones: {Leer: {Texto: "", Url: ""}, Editar: {Texto: "", Url: ""}, Borrar: {Texto: "", Url: ""} }},
  {id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d", Indice: "4", Nombre: "Yuki Sabogal", DNI: "38294812", Edad: 1, OSocial: "OSEP", Acciones: {Leer: {Texto: "", Url: ""}, Editar: {Texto: "", Url: ""}, Borrar: {Texto: "", Url: ""} }},
  {id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d", Indice: "5", Nombre: "Esther Perotti", DNI: "38294812", Edad: 42, OSocial: "OSFATUM", Acciones: {Leer: {Texto: "", Url: ""}, Editar: {Texto: "", Url: ""}, Borrar: {Texto: "", Url: ""} }},
]

export const listadoNuevo = dataPacientes.map(paciente => {
  paciente.Acciones.Leer.Texto = "Historia Clínica"
  paciente.Acciones.Leer.Url = `/paciente/${paciente.id}`

  paciente.Acciones.Editar.Texto = "Editar"
  paciente.Acciones.Editar.Url = `/editarPaciente/${paciente.id}`

  paciente.Acciones.Borrar.Texto = "Borrar"
})

