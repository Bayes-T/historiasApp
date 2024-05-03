import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public baseURL = 'URLBASE'

  nombreActual(){
    return this.http.get(this.baseURL)
  }

  emailActual(){
    return this.http.get(this.baseURL)
  }

  cambiarPassword(){
    //POST
    return this.http.get(this.baseURL)
  }

  //METODOS PENDIENTES: CAMBIAR EMAIL, CAMBIAR NOMBRE, Y RECUPERAR CONTRASEÑA

}
