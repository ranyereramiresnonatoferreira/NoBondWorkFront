import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginModel } from '../models/loginModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpCliente:HttpClient) { }

  login(loginData:loginModel){
    return this.httpCliente.post('http://localhost:3000/',loginData);
  }
}
