import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginModel } from '../models/loginModel';
import { retry } from 'rxjs';
import { AuthResponseModel } from '../models/authResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpCliente:HttpClient) { }

  login(loginData:loginModel){
    return this.httpCliente.post<AuthResponseModel>('http://localhost:3000/api/usuarios/login',loginData).pipe(retry(0));
  }
}
