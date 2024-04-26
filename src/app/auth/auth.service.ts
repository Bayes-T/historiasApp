import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {loginUser, registerUser} from "./interfaces/authInterfaces";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL = "Url BACKEND .NET Y DONDE ESTÁ LA BASE DE DATOS"

  constructor(private http: HttpClient) { }

  login(loginUser: loginUser):Observable<loginUser>{
    return this.http.post<loginUser>(`${this.baseURL}/login`, loginUser)
  }

  register(registerUser: registerUser):Observable<registerUser>{
    return this.http.post<registerUser>(`${this.baseURL}/login`, registerUser)
  }

}
