import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { loginModel } from '../../../models/loginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form:FormGroup;
  loginData:loginModel;
  constructor(private userService:UserService,
              private formBuilder: FormBuilder){
                this.form = this.formBuilder.group({
                  login:[''],
                  senha:['']
                })
              }

  login(){
    this.loginData.login = this.form.get('login').value;
    this.loginData.senha = this.form.get('senha').value;

    this.userService.login(this.loginData).subscribe({
      next: (data) => {

      },
      error: (e) => {
        
      }
    })
  }
}
