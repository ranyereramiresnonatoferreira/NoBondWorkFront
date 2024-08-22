import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { loginModel } from '../../../models/loginModel';
import { SessionStorageService } from '../../../services/session-storage.service';
import { jwtDecode } from "jwt-decode";
import { Router } from '@angular/router';

export interface JwtPayload{
  tipo:number;
  id:number
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form:FormGroup;
  loginData:loginModel;
  constructor(private userService:UserService,
              private formBuilder: FormBuilder,
              private sessionStorageService:SessionStorageService,
              private router: Router){
                this.form = this.formBuilder.group({
                  login:[''],
                  senha:['']
                })
              }

  login(){
    this.loginData = {
      login: this.form.get('login').value,
      senha: this.form.get('senha').value
    };

    this.userService.login(this.loginData).subscribe({
      next: (data) => {
        const decoded = jwtDecode<JwtPayload>(data.token);
        this.sessionStorageService.setItem('tipo', decoded.tipo.toString());
        this.sessionStorageService.setItem('id', decoded.id.toString());
        this.sessionStorageService.setItem('token', data.token);
        this.router.navigate(['/home/1']);
      },
      error: (e) => {
        
      }
    })
  }
}
